
import { useState } from "react";
import { ArrowRight, Search, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "How Sewing Skills Create Economic Independence for Women",
      excerpt: "Exploring the tangible economic benefits of sewing skills and how they translate to financial independence in various communities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      category: "Skills Development",
      date: "June 15, 2023",
      author: "Maria Johnson"
    },
    {
      id: 2,
      title: "From Trainee to Entrepreneur: Sarah's Journey",
      excerpt: "The inspiring story of how one woman transformed her basic sewing training into a thriving business employing other women.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
      category: "Success Stories",
      date: "May 22, 2023",
      author: "Elena Rodriguez"
    },
    {
      id: 3,
      title: "The Global Impact of Women's Economic Empowerment",
      excerpt: "Research shows that when women have financial independence, entire communities benefit. Here's how sewing skills contribute to this shift.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
      category: "Research",
      date: "April 10, 2023",
      author: "Dr. Michelle Chen"
    },
    {
      id: 4,
      title: "Sustainable Fashion: How Our Graduates Are Making a Difference",
      excerpt: "Our program graduates are leading the way in sustainable fashion practices. Learn how they're creating eco-friendly businesses.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
      category: "Sustainability",
      date: "March 05, 2023",
      author: "James Wilson"
    },
    {
      id: 5,
      title: "Annual Impact Report: 2023 Achievements",
      excerpt: "A comprehensive look at what SNPW accomplished this year, the lives changed, and our plans for growth in the coming year.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      category: "Organization News",
      date: "February 18, 2023",
      author: "Tania Patel, Executive Director"
    },
    {
      id: 6,
      title: "How to Support Women-Owned Businesses in Your Community",
      excerpt: "Practical ways you can support women entrepreneurs in your local area, from purchasing products to mentorship opportunities.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600",
      category: "Community Involvement",
      date: "January 29, 2023",
      author: "Andrea Lopez"
    }
  ];
  
  const categories = [
    "All Categories",
    "Skills Development",
    "Success Stories",
    "Research",
    "Sustainability",
    "Organization News",
    "Community Involvement"
  ];
  
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-snpw-pink-light to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Stay Updated with SNPW
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore inspiring stories, updates, and insights about our work and the incredible women we serve.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-snpw-pink focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <div className="lg:flex lg:gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="chip mb-4">Featured Article</div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                  <div className="relative">
                    <img 
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: "400px" }}
                    />
                    <div className="absolute top-4 left-4 bg-snpw-pink text-white px-3 py-1 rounded-full text-xs font-medium">
                      {blogPosts[0].category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h2>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-4">{blogPosts[0].date}</span>
                      <User size={14} className="mr-1" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{blogPosts[0].excerpt}</p>
                    <a href="#" className="text-snpw-pink font-medium hover:underline inline-flex items-center">
                      Read Full Article <ArrowRight className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              
              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.slice(1).map(post => (
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
                      <div className="relative">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <Calendar size={12} className="mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <User size={12} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                        <a href="#" className="text-snpw-pink font-medium hover:underline inline-flex items-center text-sm">
                          Read More <ArrowRight className="ml-1" size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No articles found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button variant="outline" className="px-4">Previous</Button>
                    <Button className="bg-snpw-pink hover:bg-snpw-pink-dark text-white px-4">1</Button>
                    <Button variant="outline" className="px-4">2</Button>
                    <Button variant="outline" className="px-4">3</Button>
                    <Button variant="outline" className="px-4">Next</Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4 mt-8 lg:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block px-4 py-2 rounded-lg hover:bg-gray-50 ${
                          category === "All Categories" && !searchQuery ? "bg-snpw-pink-light text-snpw-pink font-medium" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchQuery(category === "All Categories" ? "" : category);
                        }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-snpw-pink-light rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Stay updated with our latest news, success stories, and upcoming events.
                </p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-snpw-pink focus:border-transparent"
                />
                <Button className="w-full bg-snpw-pink hover:bg-snpw-pink-dark text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
