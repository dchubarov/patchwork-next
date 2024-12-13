export default function LandingPage() {
  return (
    <div>
      {[...Array(140)].map((_, index) => (
        <p key={index}>Pretty blank canvas</p>
      ))}
    </div>
  );
}
