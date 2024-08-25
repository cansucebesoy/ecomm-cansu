import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProductCard = () => {
  return (
    <div>
      <Card>
        <CardHeader className="items-center">
          <CardDescription>Featured Products</CardDescription>
          <CardTitle>BESTSELLER PRODUCTS</CardTitle>
          <CardDescription>
            Problems trying to resolve the conflict between
          </CardDescription>
        </CardHeader>
        <div className="container">
          <div className="w-full flex flex-col items-center justify-between md:flex-row lg:flex-row">
            <div className="">
              <CardContent className="">
                <img src="./product-card.jpg" alt="" />
              </CardContent>
              <div className="flex justify-center">
                <CardFooter>
                  <div className="flex flex-col items-center">
                    <CardTitle>Graphic Design</CardTitle>
                    <CardDescription>English Department</CardDescription>
                    <p>
                      <span>$16.48</span> $6.48
                    </p>
                    <img src="./product-colors.svg" alt="" />
                  </div>
                </CardFooter>
              </div>
            </div>
            <div>
              <CardContent>
                <img src="./product-card.jpg" alt="" />
              </CardContent>
              <CardFooter>
                <div>
                  <p>Graphic Design</p>
                  <p>English Department</p>
                  <p>
                    <span>$16.48</span> $6.48
                  </p>
                  <img src="./product-colors.svg" alt="" />
                </div>
              </CardFooter>
            </div>
            <div>
              <CardContent>
                <img src="./product-card.jpg" alt="" />
              </CardContent>
              <CardFooter>
                <div>
                  <p>Graphic Design</p>
                  <p>English Department</p>
                  <p>
                    <span>$16.48</span> $6.48
                  </p>
                  <img src="./product-colors.svg" alt="" />
                </div>
              </CardFooter>
            </div>
            <div>
              <CardContent>
                <img src="./product-card.jpg" alt="" />
              </CardContent>
              <CardFooter>
                <div>
                  <p>Graphic Design</p>
                  <p>English Department</p>
                  <p>
                    <span>$16.48</span> $6.48
                  </p>
                  <img src="./product-colors.svg" alt="" />
                </div>
              </CardFooter>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
