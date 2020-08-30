import React, { Fragment } from 'react';
import uuid from 'uuid';

import { Navigation } from './Navigation';
import groping from '../assets/audio/01-Groping.mp3';
import schroonlake from '../assets/audio/14-Schroon_Lake_Paradox.mp3';
import fashionmag from '../assets/audio/01-Fashion_Mag.mp3';
import settle from '../assets/audio/08-Settle_Down.mp3';
import everywhere from '../assets/audio/01-I_Go_Everywhere.mp3';
import only from '../assets/audio/02-Only_Breaks_My_Heart.mp3';
import youcouldbemine from '../assets/audio/03-You_Could_Be_Mine.mp3';
import radio from '../assets/audio/04-Radio_For_Backup.mp3';
import cop from '../assets/audio/Hey_Man_You_A_Cop.mp3';
import blackouts from '../assets/audio/Let_The_Blackouts_Roll.mp3';
import paris from '../assets/audio/Paris.mp3';
import detained from '../assets/audio/Lets_Get_Detained.mp3';
import syntax from '../assets/audio/01-Syntax_Error.mp3';
import ashamed from '../assets/audio/02-Ashamed_To_Be_A_Human.mp3';
import transistor from '../assets/audio/04-Transister_Love.mp3';

export const OldMusic = props => {
  const bnbh = [
    {
      id: uuid(),
      url: groping,
      text: 'Groping',
    },
    {
      id: uuid(),
      url: schroonlake,
      text: 'Schroon Lake Paradox',
    },
    {
      id: uuid(),
      url: fashionmag,
      text: 'Fashion Mag',
    },
    {
      id: uuid(),
      url: settle,
      text: 'Settle Down',
    },
  ];
  const tremors = [
    {
      id: uuid(),
      url: everywhere,
      text: 'I Go Everywhere',
    },
    {
      id: uuid(),
      url: only,
      text: 'Only Breaks My Heart',
    },
    {
      id: uuid(),
      url: youcouldbemine,
      text: 'You Could Be Mine',
    },
    {
      id: uuid(),
      url: radio,
      text: 'Radio For Backup',
    },
  ];
  const detainees = [
    {
      id: uuid(),
      url: cop,
      text: 'Hey Man, You a Cop?',
    },
    {
      id: uuid(),
      url: blackouts,
      text: 'Let The Blackouts Roll',
    },
    {
      id: uuid(),
      url: paris,
      text: 'Paris',
    },
    {
      id: uuid(),
      url: detained,
      text: "Let's Get Detained",
    },
  ];
  const syntaxerror = [
    {
      id: uuid(),
      url: syntax,
      text: 'Syntax Error',
    },
    {
      id: uuid(),
      url: ashamed,
      text: 'Ashamed To Be Human',
    },
    {
      id: uuid(),
      url: transistor,
      text: 'Transistor Love',
    },
  ];
  return (
    <Fragment>
      <h3>A sampler of my old bands</h3>
      <h4>Syntax Error</h4>
      <Navigation links={syntaxerror} />
      <h4>Detainees</h4>
      <Navigation links={detainees} />
      <h4>Tremors</h4>
      <Navigation links={tremors} />
      <h4>Brand New Broken Homes</h4>
      <Navigation links={bnbh} />
    </Fragment>
  );
};
