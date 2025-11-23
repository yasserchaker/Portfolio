function Background() {
  return (
    <video
      className="bg-video w-full h-full object-cover filter brightness-50"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/Séquence 01.mp4" type="video/mp4" />
    </video>
  );
}

export default Background;