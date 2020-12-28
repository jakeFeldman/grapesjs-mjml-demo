import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesjsMJML from 'grapesjs-mjml/dist/grapesjs-mjml'
import React, { useEffect } from 'react';

export const Editor = () => {
    useEffect(() => {
        grapesjs.init({
            container: '#email-editor',
            fromElement: true,
            avoidInlineStyle: false,
            panels: { defaults: [] },
            plugins: [grapesjsMJML],
            pluginsOpts: {
                [grapesjsMJML]: {}
            },
            height: '300px',
            blockManager: {
                appendTo: '#email-editor-blocks',
            }
        });
    }, []);
    return (
        <div>
            <div id="email-editor" />
            <div id="email-editor-blocks" />
        </div>
    );
};
