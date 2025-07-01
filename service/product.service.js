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
