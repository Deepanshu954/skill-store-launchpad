
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, BookOpen, CheckCircle, Play, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      students: 12547,
      duration: "42 hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Web Development",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Python for Data Science & Machine Learning",
      instructor: "Dr. Michael Chen",
      price: 79.99,
      originalPrice: 179.99,
      rating: 4.9,
      students: 8932,
      duration: "38 hours",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Data Science",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emily Rodriguez",
      price: 69.99,
      originalPrice: 149.99,
      rating: 4.7,
      students: 15623,
      duration: "28 hours",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "Marketing",
      level: "All Levels"
    },
    {
      id: 4,
      title: "React & Node.js Full Stack Development",
      instructor: "James Wilson",
      price: 94.99,
      originalPrice: 219.99,
      rating: 4.8,
      students: 6847,
      duration: "51 hours",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "Full Stack",
      level: "Advanced"
    },
    {
      id: 5,
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Park",
      price: 59.99,
      originalPrice: 129.99,
      rating: 4.9,
      students: 11234,
      duration: "22 hours",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Design",
      level: "Beginner"
    },
    {
      id: 6,
      title: "JavaScript Algorithms & Data Structures",
      instructor: "Alex Thompson",
      price: 74.99,
      originalPrice: 164.99,
      rating: 4.6,
      students: 9876,
      duration: "35 hours",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Programming",
      level: "Intermediate"
    }
  ];

  const categories = [
    { name: "Web Development", count: 156, icon: "💻" },
    { name: "Data Science", count: 89, icon: "📊" },
    { name: "Design", count: 124, icon: "🎨" },
    { name: "Marketing", count: 67, icon: "📈" },
    { name: "Business", count: 203, icon: "💼" },
    { name: "Programming", count: 178, icon: "⚡" }
  ];

  const testimonials = [
    {
      name: "Jessica Adams",
      role: "Frontend Developer",
      content: "These courses completely transformed my career. I went from zero coding knowledge to landing my dream job in just 6 months!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c775?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Data Analyst",
      content: "The quality of instruction is outstanding. Every concept is explained clearly with practical examples.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "Digital Marketer",
      content: "Best investment I've made in my professional development. The courses are up-to-date and incredibly practical.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LearnHub
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</a>
              <a href="#categories" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master New Skills with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Expert-Led Courses
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 students learning from industry professionals. Build your career with hands-on projects and real-world skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto">
                <Play className="mr-2 h-5 w-5" />
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
                Browse Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-blue-100">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">200+</div>
                <div className="text-blue-100">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.8★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked courses from industry experts to accelerate your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 hover:bg-blue-700">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">{course.level}</Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    by {course.instructor}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <Badge variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-200">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg transition-all">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Explore courses across different fields and industries</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.count} courses available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of successful learners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of learners and unlock your potential with expert-led courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto">
              <CheckCircle className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">LearnHub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with high-quality, affordable education.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
