
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { formSteps } from '@/lib/form-utils';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  [key: string]: string;
}

const OnboardingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is where you would typically send the data to your backend
    console.log("Form submitted with data:", formData);
    
    toast({
      title: "Form submitted!",
      description: "Thanks for completing the onboarding form.",
    });
  };

  const closeModal = () => {
    toast({
      title: "Form closed",
      description: "You can always come back and finish later.",
    });
  };

  const handleNext = () => {
    const currentField = formSteps[currentStep].field;
    const isRequired = formSteps[currentStep].required;
    
    if (isRequired && !formData[currentField]) {
      toast({
        title: "Required field",
        description: "Please answer this question before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = formSteps[currentStep];

  return (
    <div className="relative max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={closeModal} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-6">
        <div className="text-sm text-blue-600 font-medium">The Rundown AI</div>
        <h1 className="text-2xl font-bold mt-2 mb-3">Welcome to The Rundown 👋</h1>
        <p className="text-gray-600">
          Before we get started, fill out our quick form with your goals, and we 
          will analyze it to recommend the best AI tools, guides, videos, and 
          courses - personalized to your needs.
        </p>
      </div>
      
      <div className="w-full bg-gray-100 h-1 mb-6">
        <div 
          className="bg-rundown-blue h-1" 
          style={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">
            {currentStep + 1}. {currentQuestion.question}
            {currentQuestion.required && <span className="text-red-500">*</span>}
          </h2>

          {!currentQuestion.options ? (
            <Input
              type="text"
              value={formData[currentQuestion.field] || ''}
              onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
              placeholder="Please type your response here"
              className="w-full"
            />
          ) : (
            <RadioGroup
              value={formData[currentQuestion.field] || ''}
              onValueChange={(value) => handleInputChange(currentQuestion.field, value)}
              className="space-y-2"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
        </div>

        <div className="flex justify-between pt-4">
          {currentStep > 0 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePrevious}
            >
              Back
            </Button>
          )}
          
          <div className="ml-auto">
            {currentStep < formSteps.length - 1 ? (
              <Button 
                type="button" 
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit"
                className="bg-rundown-blue hover:bg-blue-700 text-white"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
