// Droplet dependencies
// TODO: should paths change for webpack?
require('../../../../lib/ace/src-noconflict/ace');
require('../../../../lib/ace/src-noconflict/mode-javascript');
require('../../../../lib/ace/src-noconflict/ext-language_tools');
require('../../../../lib/ace/src-noconflict/theme-chrome');
import '../../../../lib/droplet/droplet.min.css';

import React, {useEffect} from 'react';
import './droplet.scss';
import {DropletWrapper} from './DropletWrapper';

interface DropletEditorProps {
  droplet: DropletWrapper;
}

const DropletEditor = ({droplet}: DropletEditorProps) => {
  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      droplet.render(ref.current);
    }
  }, [ref, droplet]);

  return (
    <div className="dropletContainer">
      <div ref={ref}>droplet will render into this</div>
    </div>
  );
};

export default DropletEditor;
