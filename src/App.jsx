import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card'
import Button from './components/Button'
import Banner from './components/Banner'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div>
      <NavBar appName="TechNova Solutions" />
      
      {/* 
        NOTE ON IMAGES: 
        Currently, these are using placeholder URLs from Unsplash. 
        To use your own local images:
        1. Put your image files in the 'public' folder (e.g. 'public/banner.jpg')
        2. Change the string below to just the filename: backgroundImage="/banner.jpg"
        Or, if you put them in 'src/assets', you can import them at the top like:
        import myBannerImg from './assets/banner.jpg';
        and use it like: backgroundImage={myBannerImg}
      */}
      <Banner 
        promotionalMessage="🎉 Special Offer: Get 50% Off Our Premium Services!" 
        subMessage="Empowering your digital transformation with cutting-edge solutions at a fraction of the cost."
        callToActionText="Claim Discount Now" 
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        onActionClick={() => alert('Banner button clicked!')} 
      />

      <div className="container">
        <Greeting />
        
        <div className="cards-grid">
          <Card 
            title="Web Development" 
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80"
            description="We build scalable, robust, and beautiful web applications tailored to your specific business needs." 
          />
          <Card 
            title="UI/UX Design" 
            image="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            description="Our creative team designs intuitive and engaging user interfaces that captivate your audience." 
          />
          <Card 
            title="Data Analytics" 
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            description="Unlock the power of your data with our advanced analytics and insightful reporting tools." 
          />
        </div>
        
        <div className="button-group">
          {/* Showcasing the different customizable buttons */}
          <Button text="Primary (Large)" variant="primary" size="large" onClick={() => alert('Primary clicked')} />
          <Button text="Secondary (Medium)" variant="secondary" size="medium" onClick={() => alert('Secondary clicked')} />
          <Button text="Outline (Small)" variant="outline" size="small" onClick={() => alert('Outline clicked')} />
          <Button text="Success" variant="success" size="medium" onClick={() => alert('Success clicked')} />
          <Button text="Danger" variant="danger" size="medium" onClick={() => alert('Danger clicked')} />
        </div>
        
        <div className="testimonial-section">
          <Testimonial 
            quote="This application completely changed the way we do business. The interface is absolutely stunning, and their team was incredible to work with!" 
            name="Sarah Jenkins" 
            photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          />
          <br />
          <Testimonial 
            quote="The best investment our company has made this year. Everything works flawlessly and the support team is always there when you need them." 
            name="David Chen" 
            photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
