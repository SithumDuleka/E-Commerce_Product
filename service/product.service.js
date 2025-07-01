const prisma = require("../config/prismaClient");
const {NotFoundError} = require("../utils/AppError");

exports.getAll = async() =>{
    return await prisma.product.findMany({
        include:{variant:true},
        orderBy:{id:'asc'}
    })
}

exports.getByID = async(id) =>{
    const product = await prisma.product.findUnique({
        where:{id:Number(id)},
        include:{variant:true}
    })
    if(!product){
        throw new NotFoundError('product not found');
    }
    return product;
}
// Create a new product
exports.create = async (data) => {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      base_price: data.base_price,
      thumbnail: data.thumbnail,
      label: data.label,
      variant: data.variants
        ? {
            create: data.variants.map((v) => ({
              color: v.color,
              size: v.size,
              price: v.price,
              image: v.image
            }))
          }
        : undefined
    },
    include: { variant: true }
  });
};

// Update a product by ID
exports.update = async (id, data) => {
  const existing = await prisma.product.findUnique({
    where: { id: Number(id) }
  });

  if (!existing) {
    throw new NotFoundError("Product not found");
  }

  return await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name: data.name,
      description: data.description,
      base_price: data.base_price,
      thumbnail: data.thumbnail,
      label: data.label
      // Note: this doesn't update variants — handle that separately if needed
    },
    include: { variant: true }
  });
};
