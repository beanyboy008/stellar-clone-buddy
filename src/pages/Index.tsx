
import Header from '@/components/Header';
import OnboardingForm from '@/components/OnboardingForm';
import RundownLogo from '@/components/RundownLogo';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-2 bg-rundown-blue absolute top-0" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <RundownLogo className="z-0 opacity-10 w-24 h-24" />
        </div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <OnboardingForm />
      </main>
    </div>
  );
};

export default Index;
