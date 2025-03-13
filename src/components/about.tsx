interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-16"
    >
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
          hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
          eleifend nibh porttitor.
        </p>
        <p className="text-lg">
          Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.
        </p>
      </div>
    </section>
  )
}

export default About;
