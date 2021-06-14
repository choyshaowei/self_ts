let product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  result: any;
};

product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
  result: "test",
};

product.tags.push("pushedItem");


for(const hobby of product.tags){
    console.log(hobby.toUpperCase())
}
console.log(product);
