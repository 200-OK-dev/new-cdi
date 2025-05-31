import React from 'react';

interface SiloCardProps {
  messageId: string;
  messageNumber: number;
  title: string;
  subtitle: string;
  description: string;
  sender: string;
}

const SiloCard: React.FC<SiloCardProps> = ({
  messageId = "SHF-ID#-APL 9733",
  messageNumber = 18754,
  title = "REPRODUCTIVE CLEARANCE GRANT",
  subtitle = "CONGRATULATIONS. YOU HAVE BEEN APPROVED FOR",
  description = "CHILDBEARING STATUS FOR YEAR.\nPLEASE SEE YOUR DOCTOR",
  sender = "MOD8 / SILO ADMIN",
}) => {
  return (
    <div className="w-full max-w-lg mx-auto border border-gray-800 rounded-lg overflow-hidden bg-green-500/20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="font-bold text-xl">1 NEW MESSAGE</div>
        <button className="border-2 border-black px-8 py-1 font-bold">CLOSE</button>
        <div className="font-bold text-xl">SILO MAIL</div>
      </div>

      {/* Message Label */}
      <div className="flex items-center justify-center my-4">
        <div className="w-1/3 h-px bg-gray-400"></div>
        <div className="px-4 font-bold text-lg">MESSAGE</div>
        <div className="w-1/3 h-px bg-gray-400"></div>
      </div>

      {/* Message ID */}
      <div className="px-4 mb-4 font-bold">{messageId}</div>

      {/* Message Content */}
      <div className="mx-4 mb-4 bg-gray-900 text-amber-400 p-4 rounded">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold text-white">{title}</div>
          <button className="bg-amber-300 text-black px-6 py-2 rounded font-bold">VIEW</button>
        </div>
        <div className="text-xl">
          {subtitle}
          <br />
          {description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="font-bold">{sender}</div>
        <div className="font-bold">MSG# {messageNumber}</div>
      </div>
    </div>
  );
};

export default SiloCard;




<SiloCard 
messageId="SHF-ID#-APL 9733"
messageNumber={18754}
title="REPRODUCTIVE CLEARANCE GRANT"
subtitle="CONGRATULATIONS. YOU HAVE BEEN APPROVED FOR"
description="CHILDBEARING STATUS FOR YEAR.\nPLEASE SEE YOUR DOCTOR"
sender="MOD8 / SILO ADMIN"
/>



{(() => {
  const showcaseCards = [
    {
      title: "Dialog",
      bg: "bg-amber-500 dark:bg-amber-500/50",
      content: (
        <div className="h-24 flex items-center justify-center border rounded-md">
          <span className="text-sm">Click to open</span>
        </div>
      ),
      description: "A modal dialog that interrupts the user with important content."
    },
    {
      title: "Navigation Menu",
      bg: "bg-purple-500 dark:bg-purple-500/50",
      content: (
        <div className="h-24 flex flex-col items-start justify-center gap-2">
          <div className="flex gap-2 text-sm">
            <span className="font-medium">Overview</span>
            <span>Features</span>
            <span>About</span>
          </div>
        </div>
      ),
      description: "A collection of links for navigating websites."
    },
    {
      title: "Popover",
      bg: "bg-green-500 dark:bg-blue-500/50",
      content: (
        <div className="h-24 flex items-center justify-center">
          <div className="border rounded-md p-2 text-sm">
            <div className="font-medium">Account</div>
            <div className="text-xs text-muted-foreground">Manage your account</div>
          </div>
        </div>
      ),
      description: "Displays rich content in a portal, triggered by a button."
    },
    {
      title: "Slider",
      bg: "bg-cyan-500 dark:bg-cyan-500/50",
      content: (
        <div className="h-24 flex items-center justify-center">
          <div className="w-full px-4">
            <div className="h-2 bg-muted rounded-full relative">
              <div
                className="absolute h-4 w-4 bg-primary rounded-full top-1/2 -translate-y-1/2"
                style={{ left: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      ),
      description: "Allows users to make selections from a range of values."
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Lorem ipsum dolor sit amet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {showcaseCards.map((card, idx) => (
          <Card key={idx} className={`p-6 ${card.bg} border-0`}>
            <h3 className="font-semibold mb-4">{card.title}</h3>
            <div className="bg-background rounded-md p-4 shadow-sm">{card.content}</div>
            <p className="text-xs mt-4 text-muted-foreground">{card.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
})()}