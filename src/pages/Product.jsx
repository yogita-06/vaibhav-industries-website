import cardamomImg from "@/assets/cardamom.jpg";
import makhanaImg from "@/assets/makhana.jpg";
import cuminImg from "@/assets/cumin.jpg";
import cinnamonImg from "@/assets/cinnamon.jpg";
import sesameImg from "@/assets/sesame.jpg";

const Products = () => {
  const products = [
    {
      name: "Cardamom (Elaichi)",
      image: cardamomImg,
      description:
        "Premium green cardamom, known for its intense aroma and superior quality. Sourced from the finest plantations.",
      grades: [
        "6–7 mm",
        "7 mm",
        "7.5 mm",
        "7–8 mm",
        "8 mm",
        "8++ Premium Export Grade",
      ],
    },
    {
      name: "Makhana (Foxnuts)",
      image: makhanaImg,
      description:
        "Premium quality foxnuts, carefully processed and sorted for export markets. Rich in nutrients and perfectly crispy.",
      grades: [
        "5 Suta",
        "5+ Suta",
        "5 Handpicked",
        "5+ Handpicked",
        "6 Handpicked",
        "6+ Handpicked",
      ],
    },
    {
      name: "Cumin Seeds (Jeera)",
      image: cuminImg,
      description:
        "Aromatic and earthy cumin seeds, essential in cuisines worldwide. Premium quality with consistent flavor profile.",
      grades: ["Export Quality", "Premium Grade", "Standard Grade"],
    },
    {
      name: "Cinnamon (Dalchini)",
      image: cinnamonImg,
      description:
        "Sweet and aromatic cinnamon sticks, carefully selected for their rich flavor and premium quality.",
      grades: ["Premium Sticks", "Export Quality", "Standard Grade"],
    },
    {
      name: "Sesame Seeds",
      image: sesameImg,
      description:
        "High-quality sesame seeds available in white, black, and hulled varieties. Perfect for various culinary applications.",
      grades: ["White Sesame", "Black Sesame", "Hulled Sesame", "Natural Sesame"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Range of Premium Agro Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of premium Indian agricultural products,
            each meeting international quality standards
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`premium-card overflow-hidden ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex`}
            >
              {/* Product Image */}
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h2>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Grades */}
                <div className="gold-border p-6 bg-accent/5">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                    Available Grades
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {product.grades.map((grade, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {grade}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center p-8 bg-muted rounded-xl">
          <p className="text-lg font-medium text-foreground">
            ✓ All products are FSSAI certified, hygienically processed, and export-ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
