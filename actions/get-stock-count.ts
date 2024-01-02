import prismadb from "@/lib/prismadb"

export const getStockCount = async(storeId:string) => {
  const StockCount = await prismadb.product.findMany({
    where:{
        storeId:storeId,
        isArchived: false,
    }
  })
  
  return StockCount.length;
}
