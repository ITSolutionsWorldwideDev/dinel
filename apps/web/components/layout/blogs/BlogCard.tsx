import { ArrowRight, Clock, User } from "lucide-react";

// Sample data structure - replace with your JSON data
const blogData = [
  {
    id: 1,
    category: "Career Tips",
    title: "10 Skills Every Modern Engineer Needs to Master",
    description:
      "From technical expertise to soft skills, discover what sets top engineering professionals apart in today's",
    author: "Mark de Vries",
    readTime: "7 min read",
    image: "/assets/blogs/34d01a0218bf6f5277380711dd4e4a5a728e0129.jpg",
  },
  {
    id: 2,
    category: "Technology",
    title: "How AI is Transforming Industrial Automation",
    description:
      "Artificial intelligence is revolutionizing manufacturing and process industries. Learn about the latest trends and career",
    author: "Lisa Jansen",
    readTime: "6 min read",
    image: "/assets/blogs/1679966861826fdbccd584090148a01cf82d6a7f.jpg",
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Sustainable Infrastructure: Building Tomorrow's World",
    description:
      "How engineers are leading the charge in creating eco-friendly infrastructure that meets the challenges of climate",
    author: "Tom Bakker",
    readTime: "8 min read",
    image: "/assets/blogs/269927930ba3bbe1628b158ee45c9ec2cd4be685.jpg",
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Sustainable Infrastructure: Building Tomorrow's World",
    description:
      "How engineers are leading the charge in creating eco-friendly infrastructure that meets the challenges of climate",
    author: "Tom Bakker",
    readTime: "8 min read",
    image: "/assets/blogs/04bde7577e9cbecf5f746a2170fdce2e778d615a.jpg",
  },
  {
    id: 5,
    category: "Sustainability",
    title: "Sustainable Infrastructure: Building Tomorrow's World",
    description:
      "How engineers are leading the charge in creating eco-friendly infrastructure that meets the challenges of climate",
    author: "Tom Bakker",
    readTime: "8 min read",
    image: "/assets/blogs/61e45ff55f0a088202a6068bc406e326d1ffab5f.jpg",
  },
];

export default function BlogCards() {
  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#0A7CD8]">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl  text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 border-b border-gray-200 p-4">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-[#0A7CD8] font-bold hover:text-blue-700 transition-colors group">
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
