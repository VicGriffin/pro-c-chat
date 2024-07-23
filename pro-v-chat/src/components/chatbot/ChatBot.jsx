import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment, Button } from 'semantic-ui-react';

function ChatBotComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
        id: 'greet',
        message: 'Hello! What is your name?',
        trigger: 'waiting1'
      },
      {
        id: 'waiting1',
        user: true,
        trigger: 'name'
      },    
    {
      id: 'name',
      message: 'Hello! Welcome to the SFT. How can I help you today {previousValue}?, would you want to know how to get sponsors?',
      trigger: 'response'
    },
    
    {
      id: 'response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'issues' },
        { value: 'no', label: 'No', trigger: 'name' }
      ]
    },
    {
        id: 'waiting3',
        user: true,
      }, 
    {
      id: 'issues',
      options: [
        { value: 'ideas', label: 'Ideas', trigger: 'ideas' },
        { value: 'projects', label: 'Projects', trigger: 'projects' }
      ]
    },
    {
      id: 'ideas',
      message: 'Present innovative, sustainable solutions with clear benefits and a compelling vision to attract sponsors interest',
      trigger: 'issues'
    },
    {
      id: 'projects',
      message: 'Showcase impactful, well-structured projects with measurable outcomes, strong collaboration, and potential for scalability.',
      trigger: 'issues'
    }
  ];

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close SFTChatBot' : 'Open SFTChatBot'}
      </Button>
      {isOpen && (
        <Segment floated="right">
          <ChatBot steps={steps} key={isOpen ? 'open' : 'close'} />
        </Segment>
      )}
    </>
  );
}

export default ChatBotComponent;
