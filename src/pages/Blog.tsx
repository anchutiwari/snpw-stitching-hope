
import { useState, useEffect } from "react";
import { ArrowRight, Search, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Type definitions
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  date: string;
  author: string;
  featured?: boolean;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How Sewing Skills Create Economic Independence for Women",
      excerpt: "Exploring the tangible economic benefits of sewing skills and how they translate to financial independence in various communities.",
      content: "Sewing is more than just a craft; it's a pathway to economic independence for many women around the world. By learning to sew, women can create products that meet local demand, from clothing to home goods. This skill allows them to generate income while maintaining flexible schedules that accommodate family responsibilities.\n\nIn many communities, skilled seamstresses can earn two to three times the local minimum wage. With relatively low startup costs, sewing businesses can be launched with just a machine, basic supplies, and dedication. The versatility of sewing skills also means that women can adapt their products to changing market demands.\n\nNot only does this skill provide immediate income, but it also creates long-term economic stability. Many of our program graduates have gone on to employ other women, creating a ripple effect of economic empowerment throughout their communities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      category: "Skills Development",
      date: "June 15, 2023",
      author: "Maria Johnson",
      featured: true
    },
    {
      id: 2,
      title: "From Trainee to Entrepreneur: Sarah's Journey",
      excerpt: "The inspiring story of how one woman transformed her basic sewing training into a thriving business employing other women.",
      content: "When Sarah joined our sewing program three years ago, she had never used a sewing machine before. A single mother of two, she was struggling to make ends meet with occasional domestic work. Through dedicated practice and mentorship, Sarah quickly mastered the basics of sewing and pattern making.\n\nWithin six months of completing her training, Sarah had saved enough from small orders to purchase her own sewing machine. She began working from home, creating children's clothing that she sold at local markets. Her attention to detail and quality craftsmanship quickly gained her a loyal customer base.\n\nToday, Sarah operates a small workshop with three sewing machines and has employed two other women from her community. She specializes in school uniforms and has secured contracts with two local schools. \"The training gave me more than just sewing skills,\" Sarah says. \"It gave me confidence and showed me that I could build something meaningful for my family and community.\"",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
      category: "Success Stories",
      date: "May 22, 2023",
      author: "Elena Rodriguez"
    },
    {
      id: 3,
      title: "The Global Impact of Women's Economic Empowerment",
      excerpt: "Research shows that when women have financial independence, entire communities benefit. Here's how sewing skills contribute to this shift.",
      content: "When women gain economic independence, the positive effects extend far beyond their personal finances. Research consistently shows that women reinvest up to 90% of their income into their families and communities, compared to 40% for men. This investment takes the form of improved nutrition, better healthcare, and increased educational opportunities for children.\n\nIn communities where SNPWS has implemented sewing programs, we've observed significant improvements in several key indicators of wellbeing. School attendance rates have increased by 35%, particularly among girls. Healthcare utilization has improved, with more families seeking preventive care. Local economies have diversified, with new micro-businesses emerging in related sectors.\n\nThe psychological impact is equally important. Women who achieve financial independence report higher self-esteem, greater decision-making power within their households, and increased participation in community leadership. This creates a virtuous cycle where empowered women become role models for younger generations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
      category: "Research",
      date: "April 10, 2023",
      author: "Dr. Michelle Chen"
    },
    {
      id: 4,
      title: "Sustainable Fashion: How Our Graduates Are Making a Difference",
      excerpt: "Our program graduates are leading the way in sustainable fashion practices. Learn how they're creating eco-friendly businesses.",
      content: "As environmental consciousness grows globally, SNPWS graduates are incorporating sustainable practices into their sewing businesses. Many are pioneering upcycling techniques that transform discarded textiles into beautiful new products, reducing waste while creating unique items that appeal to eco-conscious consumers.\n\nGraduate Priya Sharma has built her business entirely around reclaimed fabrics. She collects excess materials from local factories and transforms them into fashionable bags, accessories, and home decor items. \"What others see as waste, I see as an opportunity,\" Priya explains. \"Each piece has a story, and my customers appreciate knowing they're supporting both women's empowerment and environmental sustainability.\"\n\nAnother graduate, Meena, specializes in natural dyeing techniques using locally available plant materials. Her textiles feature vibrant colors created without harmful chemicals, appealing to health-conscious consumers. By combining traditional knowledge with modern designs, she's created a niche product with growing demand in both local and export markets.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600",
      category: "Sustainability",
      date: "March 05, 2023",
      author: "James Wilson"
    },
    {
      id: 5,
      title: "Annual Impact Report: 2023 Achievements",
      excerpt: "A comprehensive look at what SNPW accomplished this year, the lives changed, and our plans for growth in the coming year.",
      content: "The past year has been transformative for SNPWS and the women we serve. We've expanded our programs to three new communities, trained 145 women in advanced sewing skills, and helped establish 37 new women-owned businesses. Our micro-financing initiative provided startup capital to 22 graduates, with a remarkable 96% repayment rate.\n\nBeyond the numbers, we've deepened our impact through comprehensive business training. Graduates now receive six months of mentorship focused on financial management, marketing, and sustainable business practices. This holistic approach has improved business survival rates, with 85% of new enterprises still operating two years after launch.\n\nLooking ahead, we're excited to announce two major initiatives for the coming year. First, we'll be launching a digital skills component to help women market their products online and reach broader markets. Second, we're developing a cooperative model that will allow graduates to access larger contracts and share resources, creating economies of scale while maintaining individual ownership.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      category: "Organization News",
      date: "February 18, 2023",
      author: "Tania Patel, Executive Director"
    },
    {
      id: 6,
      title: "How to Support Women-Owned Businesses in Your Community",
      excerpt: "Practical ways you can support women entrepreneurs in your local area, from purchasing products to mentorship opportunities.",
      content: "Supporting women entrepreneurs doesn't always require financial donations. There are numerous ways individuals can make a meaningful impact through everyday actions and choices.\n\nOne of the most direct ways to support women entrepreneurs is to intentionally seek out and purchase from women-owned businesses. Before making a purchase, research whether there's a woman-owned alternative that offers the product or service you need. Many online directories now make it easy to find women-owned businesses across various sectors.\n\nBeyond purchasing, consider sharing your professional skills. Many women entrepreneurs benefit from mentorship in specialized areas like accounting, marketing, legal advice, or technology. Even a few hours of your expertise can help a woman overcome specific business challenges.\n\nSocial media advocacy is another powerful tool. Following, engaging with, and sharing content from women-owned businesses increases their visibility at no cost. A thoughtful review or recommendation can significantly impact a small business's reputation and customer base.",
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

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort posts by date (most recent first)
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Get featured post
  const featuredPost = sortedPosts.find(post => post.featured) || sortedPosts[0];
  
  // Get posts for current page (excluding featured post)
  const remainingPosts = sortedPosts.filter(post => post.id !== featuredPost.id);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = remainingPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate total pages
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage);

  // Handle "Read More" toggle
  const toggleReadMore = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  // Social media sharing function
  const sharePost = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#1A237E]/20 to-white">
        <div className="container-padding text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Stay Updated with SNPW
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore inspiring stories, updates, and insights about our work and the incredible women we serve.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-3 pl-12 pr-4 rounded-full"
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
              {featuredPost && (
                <div className="mb-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#008000] text-white mb-4">Featured Article</div>
                  <Card className="overflow-hidden hover-scale">
                    <div className="relative">
                      <img 
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: "400px" }}
                      />
                      <div className="absolute top-4 left-4 bg-[#008000] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {featuredPost.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <User size={14} className="mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      
                      {expandedPost === featuredPost.id ? (
                        <div>
                          <div className="text-gray-700 mb-4 space-y-2">
                            {featuredPost.content?.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
                          <Button 
                            variant="link" 
                            className="text-[#008000] p-0 h-auto font-medium hover:underline"
                            onClick={() => toggleReadMore(featuredPost.id)}
                          >
                            Show Less
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <Button 
                              variant="link" 
                              className="text-[#008000] p-0 h-auto font-medium hover:underline inline-flex items-center"
                              onClick={() => toggleReadMore(featuredPost.id)}
                            >
                              Read Full Article <ArrowRight className="ml-1" size={14} />
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-[#008000]"
                              onClick={() => sharePost(featuredPost)}
                            >
                              <Share2 size={16} />
                              <span className="ml-1">Share</span>
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {/* Blog Posts Grid */}
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              
              {currentPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {currentPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden hover-scale">
                      <div className="relative">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/80 text-[#1A237E] px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <Calendar size={12} className="mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <User size={12} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                        
                        {expandedPost === post.id ? (
                          <div>
                            <div className="text-gray-700 mb-4 space-y-2 text-sm">
                              {post.content?.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                              ))}
                            </div>
                            <Button 
                              variant="link" 
                              className="text-[#008000] p-0 h-auto font-medium hover:underline text-sm"
                              onClick={() => toggleReadMore(post.id)}
                            >
                              Show Less
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                            <div className="flex justify-between items-center">
                              <Button 
                                variant="link" 
                                className="text-[#008000] p-0 h-auto font-medium hover:underline inline-flex items-center text-sm"
                                onClick={() => toggleReadMore(post.id)}
                              >
                                Read More <ArrowRight className="ml-1" size={12} />
                              </Button>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-500 hover:text-[#008000] text-xs p-1 h-auto"
                                onClick={() => sharePost(post)}
                              >
                                <Share2 size={14} />
                              </Button>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No articles found matching your search criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
              
              {/* Pagination */}
              {remainingPosts.length > postsPerPage && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="px-4"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <Button 
                        key={page}
                        className={currentPage === page 
                          ? "bg-[#008000] hover:bg-[#006400] text-white px-4" 
                          : "variant-outline px-4"}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      className="px-4"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
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
                      <button 
                        className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 ${
                          category === selectedCategory ? "bg-[#008000]/10 text-[#008000] font-medium" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-[#1A237E]/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Stay updated with our latest news, success stories, and upcoming events.
                </p>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full mb-4"
                />
                <Button className="w-full bg-[#1A237E] hover:bg-[#0F1752] text-white">
                  Subscribe
                </Button>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sortedPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex items-start space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{post.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
