import { TagLabel } from 'shared/components/TagLabel';
import React from 'react';
import { Row } from 'shared/ui';
// @ts-ignore
import classnames from 'classnames';

export function Article() {
  return (
    <div className="border-2 border-black flex relative">
      <div style={{ width: '45%' }} className="border-r-2 border-black">
        <img style={{ width: '100%', height: '100%' }} src={'/foto2.png'} />
      </div>
      <div style={{ width: '55%' }} className=" p-4">
        <p style={{ color: 'darkgray' }}>
          <span className="text-primary-blue">Redakcja newonce</span> 19.11.2020
        </p>
        <p style={{ fontSize: '24px', fontWeight: 900, lineHeight: '28px' }}>
          Jan-rapowanie zapowiada nowy materiał. Pierwsze single już za moment
        </p>
        <div className="inline-block relative top-4">
          <TagLabel textStyle={{ lineHeight: 'initial' }} wrapperStyle={{}} label={'polski rap'} />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-10 h-10 border-2 border-black flex items-center justify-center">
        <i style={{ fontWeight: 500, fontSize: '20px' }} className="far fa-bookmark" />{' '}
      </div>
    </div>
  );
}

export function ArticleVertical() {
  return (
    <div className="col-span-1 border-2 border-black ">
      <div style={{ maxHeight: '420px' }} className=" border-r-2 border-black relative">
        <div className="">
          <div className="overflow-hidden">
            <img style={{ width: '100%', height: '100%' }} src={'/foto2.png'} />
          </div>
          <div
            style={{ width: '200px', bottom: '-10%', left: '5%', height: '40px' }}
            className="inline-block absolute"
          >
            <TagLabel
              textStyle={{ lineHeight: 'initial' }}
              wrapperStyle={{ position: 'absolute' }}
              label={'polski rap'}
            />
          </div>
        </div>
      </div>
      <div style={{ height: '' }} className="p-4">
        <p style={{ color: 'darkgray' }}>
          <span className="text-primary-blue">Redakcja newonce</span> 19.11.2020
        </p>
        <p style={{ fontSize: '24px', fontWeight: 900, lineHeight: '28px' }}>
          Jan-rapowanie zapowiada nowy materiał. Pierwsze single już za moment
        </p>
      </div>

      <div className="absolute top-0 bg-white right-0 w-10 h-10 border-2 border-black flex items-center justify-center">
        <i style={{ fontWeight: 500, fontSize: '20px' }} className="far fa-bookmark" />{' '}
      </div>
    </div>
  );
}

export function MusicVertical({
  rating,
  album,
  track,
  albumImgPath,
}: {
  rating: number;
  album: string;
  track: string;
  albumImgPath: string;
}) {
  return (
    <div className="col-span-1 border-2 border-black ">
      <div
        style={{ maxHeight: '420px', backgroundImage: albumImgPath, height: '370px' }}
        className=" border-r-2 border-black relative"
      >
        <div className="absolute bottom-0 left-0">
          <Row className={'bg-white'}>
            <div className="p-2 border-r-2 border-r-black">
              <i
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                }}
                className="far fa-star"
              />
            </div>
            <div className="p-2">
              <p
                style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  lineHeight: '28px',
                  textAlign: 'center',
                }}
              >
                {rating}
              </p>
            </div>
          </Row>
        </div>
      </div>
      <div style={{ height: '' }} className="p-4">
        <p style={{ fontSize: '24px', fontWeight: 900, lineHeight: '28px' }}>{track}</p>
        <p style={{ fontSize: '14px', color: 'grey', fontWeight: 900, lineHeight: '20px' }}>
          {album}
        </p>
      </div>

      <div className="absolute top-0 bg-white right-0 w-10 h-10 border-2 border-black flex items-center justify-center">
        <i style={{ fontWeight: 500, fontSize: '20px' }} className="far fa-bookmark" />{' '}
      </div>
    </div>
  );
}

export function PodcastVertical() {
  return (
    <div className="col-span-1 border-2 border-black  relative">
      <Row style={{ maxHeight: '420px' }} className="overflow-hidden relative">
        <img style={{ width: '50%', height: '100%' }} src={'/foto2.png'} />
        <div className="w-full flex flex-col">
          <div style={{ flex: 2 }} className="text-center w-full flex items-center justify-center">
            <p>11:08</p>
          </div>
          <Row style={{ flex: 3 }}>
            <div className="flex-1 text-center flex items-center justify-center border-l-2 border-t-2 border-b-2 border-black">
              <div className="">
                <i style={{ fontSize: '20px' }} className={classnames('mt-1 fas fa-play ')} />
              </div>
            </div>
            <div className="flex-1 text-center  flex items-center justify-center border-2 border-black">
              <div className="">
                <i style={{ fontSize: '20px' }} className={classnames('mt-1 fas fa-bookmark ')} />
              </div>
            </div>
          </Row>
        </div>
      </Row>
      <div style={{ height: '' }} className="p-4">
        <p style={{ color: 'darkgray' }}>
          <span className="text-primary-blue">Redakcja newonce</span> 19.11.2020
        </p>
        <p style={{ fontSize: '24px', fontWeight: 900, lineHeight: '28px' }}>
          Co Będzie Dziś? Przemek Lahula
        </p>
      </div>

      <div className="absolute top-0 bg-white right-0 w-10 h-10 border-2 border-black flex items-center justify-center">
        <i style={{ fontWeight: 500, fontSize: '20px' }} className="far fa-bookmark" />{' '}
      </div>
    </div>
  );
}
