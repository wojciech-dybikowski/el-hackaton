import { Column, Row } from 'shared/ui';
import { TagLabel } from 'shared/components/TagLabel';
import React from 'react';
// @ts-ignore
import classnames from 'classnames';

export function ArticleListItem({ type }: { type?: string }) {
  return (
    <div>
      <Row className="hover:bg-black border-b-2 border-b-black hover:text-white group p-4 space-x-2">
        <Column className="flex-2">
          <p style={{ color: 'lightgrey' }}>19.11.2019</p>
          <p
            style={{
              fontWeight: 900,
              lineHeight: 1.2,
              fontFamily: 'helvetica',
              fontSize: '14px',
            }}
          >
            Ranking filmów Wesa Andersona od najgorszego do najlepszego
          </p>
          <div>
            <i
              style={{ fontSize: type === 'podcast' ? '20px' : '30px' }}
              className={classnames('mt-1', {
                'fas fa-play p-1 border-2 border-black group-hover:border-white relative':
                  type === 'podcast',
                'fas fa-long-arrow-alt-right ': type !== 'podcast',
              })}
            />
          </div>
        </Column>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        >
          <div
            style={{ bottom: -10, right: -10, boxShadow: '2px 2px 0 #000' }}
            className="absolute"
          >
            <TagLabel className="flex items-center" label={'Kino'} />
          </div>
        </div>
      </Row>
    </div>
  );
}
