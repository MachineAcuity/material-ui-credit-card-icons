'use strict';

import React from 'react';
// import SvgIcon from 'material-ui/SvgIcon';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function( props )
{
  return(
    <SvgIcon viewBox="0 0 60 40" {...props}>
      <g>
      	<path fill="#CECECD" d="M60,35c0,2.75-2.25,5-5,5H5c-2.75,0-5-2.25-5-5V5c0-2.75,2.25-5,5-5h50c2.75,0,5,2.25,5,5V35z"/>
      </g>
      <g>
      	<g>
      		<path fill="#DFDEDC" d="M55,1c2.206,0,4,1.794,4,4v30c0,2.206-1.794,4-4,4H5c-2.206,0-4-1.794-4-4V5c0-2.206,1.794-4,4-4H55 M55,0
      			H5C2.25,0,0,2.25,0,5v30c0,2.75,2.25,5,5,5h50c2.75,0,5-2.25,5-5V5C60,2.25,57.75,0,55,0L55,0z"/>
      	</g>
      </g>
    </SvgIcon>
  )
}
