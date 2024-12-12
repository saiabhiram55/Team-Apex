//Nested Layouts

// function getRandomInt(count: number){
//   return  Math.floor(Math.random()*count);
// }

export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    // const random = getRandomInt(2);

    // if(random === 1){
    //     throw new Error("Error Loading Review");
    // }

    return (
     <>
     {children}
     <h2>Features Added</h2>
     </>
    )
  }
  