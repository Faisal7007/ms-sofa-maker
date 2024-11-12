const data = [
    {
      "name": "Modern Sectional Sofa",
      "details": {
        "description": "A spacious and stylish sectional sofa with deep seating and plush cushions, perfect for family gatherings or lounging.",
        "color": "Grey",
        "material": "Fabric with wooden frame",
        "dimensions": { "width": "120 inches", "depth": "85 inches", "height": "34 inches" },
        "seatingCapacity": 5,
        "features": ["Reversible chaise", "Removable cushions", "Machine-washable covers"]
      },
      "type": "Sectional",
      "imageURL": "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868926_pe781434_s5.jpg?f=xl"
    },
    {
      "name": "Classic Leather Sofa",
      "details": {
        "description": "Elegant leather sofa with a timeless design, adding a touch of luxury to any living room.",
        "color": "Brown",
        "material": "Genuine leather with solid wood legs",
        "dimensions": { "width": "90 inches", "depth": "40 inches", "height": "35 inches" },
        "seatingCapacity": 3,
        "features": ["High-density foam cushions", "Durable leather", "Easy-to-clean surface"]
      },
      "type": "Standard",
      "imageURL": "https://www.ikea.com/in/en/images/products/aepplaryd-2-seat-sofa-djuparp-red-brown__0992861_pe820288_s5.jpg?f=xl"
    },
    {
      "name": "Compact Loveseat",
      "details": {
        "description": "A compact loveseat designed for small spaces, offering comfort without compromising on style.",
        "color": "Blue",
        "material": "Microfiber upholstery with metal legs",
        "dimensions": { "width": "60 inches", "depth": "32 inches", "height": "30 inches" },
        "seatingCapacity": 2,
        "features": ["Compact design", "Lightweight", "Removable cushion covers"]
      },
      "type": "Loveseat",
      "imageURL": "https://www.ikea.com/in/en/images/products/landskrona-3-seat-sofa-djuparp-dark-blue-wood__0990602_pe819086_s5.jpg?f=xl"
    },
    {
      "name": "Reclining Sofa",
      "details": {
        "description": "A plush reclining sofa with adjustable backrests and leg support for the ultimate relaxation experience.",
        "color": "Black",
        "material": "Faux leather with a metal frame",
        "dimensions": { "width": "85 inches", "depth": "38 inches", "height": "40 inches" },
        "seatingCapacity": 3,
        "features": ["Dual recliners", "Cup holders", "Ergonomic back support"]
      },
      "type": "Recliner",
      "imageURL": "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-headrest-with-wide-armrests-saxemara-black-blue__0952119_pe801555_s5.jpg?f=xl"
    },
    {
      "name": "Scandinavian Sofa",
      "details": {
        "description": "Minimalistic sofa with clean lines and wooden legs, perfect for modern interiors.",
        "color": "Light Beige",
        "material": "Linen fabric with oak legs",
        "dimensions": { "width": "75 inches", "depth": "33 inches", "height": "32 inches" },
        "seatingCapacity": 3,
        "features": ["Removable seat cushions", "Mid-century design", "High-resilience foam"]
      },
      "type": "Standard",
      "imageURL": "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-headrest-with-wide-armrests-hallarp-beige__1030000_pe836089_s5.jpg?f=xl"
    },
    {
      "name": "Convertible Sofa Bed",
      "details": {
        "description": "Versatile sofa bed that easily transforms into a full-size bed, ideal for small apartments or guest rooms.",
        "color": "Dark Grey",
        "material": "Polyester upholstery with metal frame",
        "dimensions": { "width": "70 inches", "depth": "34 inches", "height": "31 inches" },
        "seatingCapacity": 3,
        "features": ["Convertible design", "Easy-to-clean fabric", "Hidden storage compartment"]
      },
      "type": "Sofa Bed",
      "imageURL": "https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-with-headrest-with-wide-armrests-hallarp-grey__1030001_pe836088_s5.jpg?f=xl"
    },
    {
      "name": "L-Shaped Sectional Sofa",
      "details": {
        "description": "A spacious L-shaped sofa offering plenty of seating, perfect for large families or hosting guests.",
        "color": "Red",
        "material": "Velvet with a wooden frame",
        "dimensions": { "width": "110 inches", "depth": "90 inches", "height": "33 inches" },
        "seatingCapacity": 6,
        "features": ["L-shaped configuration", "Removable cushions", "Soft-touch fabric"]
      },
      "type": "Sectional",
      "imageURL": "https://www.ikea.com/in/en/images/products/soederhamn-corner-sofa-6-seat-tonerud-red__1213819_pe911324_s5.jpg?f=xl"
    },
    {
      "name": "Chaise Lounge Sofa",
      "details": {
        "description": "Elegant chaise lounge sofa with a comfortable backrest, great for relaxing with a book or watching TV.",
        "color": "Yellow Green",
        "material": "Velvet upholstery with metal legs",
        "dimensions": { "width": "65 inches", "depth": "30 inches", "height": "35 inches" },
        "seatingCapacity": 7,
        "features": ["Elegant design", "Soft velvet fabric", "Easy to assemble"]
      },
      "type": "Chaise Lounge",
      "imageURL": "https://www.ikea.com/in/en/images/products/jaettebo-u-shaped-sofa-7-seat-with-chaise-longue-right-with-headrests-samsala-dark-yellow-green__1179840_pe896110_s5.jpg?f=xl"
    },
    {
      "name": "Vintage Chesterfield Sofa",
      "details": {
        "description": "Luxurious Chesterfield sofa with deep tufting and rolled arms, adding sophistication to any space.",
        "color": "Kelinge-grey",
        "material": "Leather with wooden legs",
        "dimensions": { "width": "84 inches", "depth": "36 inches", "height": "31 inches" },
        "seatingCapacity": 3,
        "features": ["Deep button tufting", "Rolled arms", "Durable leather material"]
      },
      "type": "Standard",
      "imageURL": "https://www.ikea.com/in/en/images/products/kivik-4-seat-sofa-with-chaise-longue-kelinge-grey-turquoise__1055849_pe848127_s5.jpg?f=xl"
    },
    {
      "name": "Outdoor Patio Sofa",
      "details": {
        "description": "Durable outdoor sofa designed for patios or gardens, resistant to weather and UV rays.",
        "color": "Beige",
        "material": "Weather-resistant wicker with metal frame",
        "dimensions": { "width": "72 inches", "depth": "35 inches", "height": "30 inches" },
        "seatingCapacity": 3,
        "features": ["Weather-resistant", "Removable cushions", "Lightweight and portable"]
      },
      "type": "Outdoor",
      "imageURL": "https://www.ikea.com/in/en/images/products/ektorp-2-seat-sofa-karlshov-beige-multicolour__1194837_pe902083_s5.jpg?f=xl"
    }
  ]
  

  export default data