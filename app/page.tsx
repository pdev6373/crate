import Availability from '@/components/Availability';
import Dining from '@/components/Dining';
import FAQ from '@/components/FAQ';
import GetStarted from '@/components/GetStarted';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <GetStarted />
      <Dining />
      <Availability />
      <FAQ />
    </div>
  );
}
