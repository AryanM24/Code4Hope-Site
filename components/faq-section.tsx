import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQSectionProps {
  className?: string
}

const faqs = [
  {
    question: "What is Code4Hope?",
    answer: "Code4Hope is a not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate and make an impact for charitable causes. We provide a platform for students of all experience levels to showcase their coding skills while contributing to meaningful projects."
  },
  {
    question: "How often do you host hackathons?",
    answer: "We host hackathons every 2-3 months, each focusing on different topics and charitable causes. This regular schedule allows us to maintain an active community while addressing various social challenges throughout the year."
  },
  {
    question: "Can beginners participate?",
    answer: "Code4Hope welcomes students of all experience levels. Our hackathons are designed to be inclusive and supportive, with mentors and resources available to help participants learn and grow."
  },
  {
    question: "How can I get involved?",
    answer: "There are multiple ways to get involved with Code4Hope. You can participate in our hackathons, join our operations team, or contribute to our outreach initiatives. Check out our documentation for more detailed information."
  },
  {
    question: "What does the Operations team do?",
    answer: "The Operations team manages web development and technical aspects of running our organization. This includes maintaining our website, ensuring smooth hackathon experiences, implementing automation tasks, and developing code for outreach projects."
  }
]

export function FAQSection({ className }: FAQSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

