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
      <NavBar />
      <Banner message="Welcome to our application!" callToActionText="Learn More" onActionClick={() => alert('Clicked!')} />
      <Greeting />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Card title="Product 1" description="This is a great product." />
        <Card title="Product 2" description="This is another great product." />
      </div>
      <div style={{ padding: '20px' }}>
        <Button text="Primary Button" variant="primary" />
        <Button text="Secondary Button" variant="secondary" />
      </div>
      <div style={{ padding: '20px' }}>
        <Testimonial quote="This app changed my life!" name="John Doe" />
      </div>
      <Footer />
    </div>
  )
}

export default App
