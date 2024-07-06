import './styles.scss';

import React, { RefObject } from 'react';

import ProjectPanelView from '../../views/projectPanel/ProjectPanel';

type ProjectsProps = { projectsSectionRef: RefObject<HTMLDivElement> };

const panelData = [
  {
    projectLabel: 'WalletPass',
    projectDescription:
      'This app enables users to store and manage both virtual and physical arcade cards. Users can easily scan QR-codes to add cards, top up credits for gameplay, and redeem rewards or points. The app also displays detailed game information with multi-language support for diverse user needs.',
    externalLink: 'https://qareleased.icardinc.net/WalletPass/locations',
    techUsed: ['Angular', 'TypeScript', '.Net Core 6', 'C#'],
  },
  {
    projectLabel: 'Inventory: Redemption Item Mgt',
    projectDescription:
      "Intercard's Inventory app revolutionizes redemption and merchandiser inventory management on Android mobile devices. By enabling staff to effortlessly scan UPC codes, it streamlines operations, reduces labor costs, and eliminates inventory management errors.",
    externalLink:
      'https://play.google.com/store/apps/details?id=com.intercard.Inventory_App',
    techUsed: ['React-Native', 'TypeScript', '.Net Core 6', 'C#'],
  },
  {
    projectLabel: 'Mobile iReader: Cashless Tech',
    projectDescription:
      `Intercard's Mobile iReader app efficiently handles both RFID and barcoded play cards, along with wristbands and iQ-Ticket offerings, streamlining guest transactions and enhancing overall experience at attractions.`,
    externalLink:
      'https://play.google.com/store/apps/details?id=com.intercardinc.mobileireader',
    techUsed: ['React-Native', 'TypeScript', '.Net Core 6', 'C#', 'Firebase'],
  },
  {
    projectLabel: 'iService: Remote Game Mgmt',
    projectDescription:
      'The Intercard iService app provides easy remote game management for one or more locations. Users can remotely put a game out of service for maintenance and technicians can use it to track repair information and when the game was placed back into service. All information is automatically updated on the server and in the cloud.',
    externalLink:
      'https://play.google.com/store/apps/details?id=com.intercard.service.application',
    techUsed: ['React-Native', 'TypeScript', '.Net Core 6', 'C#', 'Firebase'],
  },
  {
    projectLabel: 'Notes',
    projectDescription:
      'Effortlessly allows you to create, edit, and organize your notes. With backup feature that ensures that your notes are always secure, with the flexibility to export your local storage data at any time.',
    githubLink: 'https://github.com/barreyrojohnmiko/RJSNotes',
    externalLink: 'https://barreyrojohnmiko.github.io/RJSNotes/',
    techUsed: ['ReactJS (CRA)', 'TypeScript'],
  },
  {
    projectLabel: 'Breach Analyzer',
    projectDescription:
      "This service emerged after Adobe's largest ever customer accounts breach. This aims to check if your credentials have been exposed, reducing the risk of widespread account compromise.",
    externalLink: 'https://breach.itfabrik24.net/',
    techUsed: [
      'ReactJS (Vite)',
      'JavaScript',
      'Material-UI',
      'Node.js',
      'MongoDB',
    ],
    credits: {
      cLabelStart: 'Special thanks to',
      cLabelEnd: 'for providing the data used in this service.',
      cName: 'Have I Been Pwned',
      cUrl: 'https://haveibeenpwned.com/',
    },
  },
  {
    projectLabel: 'Rückruftool',
    projectDescription:
      'Streamline call management at front desk. Easily notify the intended recipient to promptly return calls whenever someone contacts the company.',
    externalLink: 'https://rufzurück.de',
    techUsed: [
      'ReactJS (Vite)',
      'JavaScript',
      'Material-UI',
      'Node.js',
      'MongoDB',
    ],
  },
];

const ProjectsComponent: React.FC<ProjectsProps> = ({ projectsSectionRef }) => {
  return (
    <div className="projects-container" ref={projectsSectionRef}>
      <div className="projects-label opening">&lt;projects&gt;</div>

      <div className="projects-panel-container">
        {panelData.map((data: any, index: any) => (
          <React.Fragment key={index}>
            <ProjectPanelView
              projectLabel={data.projectLabel}
              projectDescription={data.projectDescription}
              githubLink={data.githubLink}
              externalLink={data.externalLink}
              techUsed={data.techUsed}
              credits={data.credits}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="projects-label closing">&lt;/projects&gt;</div>
    </div>
  );
};

export default ProjectsComponent;
