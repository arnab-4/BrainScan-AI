import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className="fixed bottom-0 right-0 p-2 hidden md:block" style={{ width: '200px', height: '200px' }}>
      <div className="relative w-full h-full">
        <Spline scene="https://prod.spline.design/Hmvkh4RSai8Ko7Gd/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}