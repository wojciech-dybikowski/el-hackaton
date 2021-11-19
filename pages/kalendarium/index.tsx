import { Grid, GridCol, Row } from 'shared/ui';
import React from 'react';

const KalendariumPage = () => {
  return (
    <main className="w-full h-screen">
      <Grid className="h-full mt-20" gridGap={8}>
        <GridCol className="space-y-8" colSpan={7}>
          <h3
            className=" uppercase "
            style={{ color: 'darkgrey', fontSize: '40px', fontWeight: 900 }}
          >
            Kalendarium
          </h3>
          <h3
            className=" uppercase text-primary-blue"
            style={{ fontSize: '48px', fontWeight: 900 }}
          >
            19 Listopada
          </h3>
          <Row className=" justify-between">
            <div className="flex space-x-4">
              <div className="border-4 border-black">
                <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
                  TAG 1
                </p>
              </div>

              <div className="border-4 border-black">
                <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
                  TAG 2
                </p>
              </div>
              <div className="border-4 border-black">
                <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
                  TAG 3
                </p>
              </div>
              <div className="border-4 border-black">
                <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
                  TAG 4
                </p>
              </div>
            </div>
            <div style={{ boxShadow: '2px 2px 0 #000' }} className="border-4 border-black">
              <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
                Sortuj
              </p>
            </div>
          </Row>
          <div>artykuł 1</div>
          <div>artykuł 2</div>
        </GridCol>
        <GridCol colSpan={5}></GridCol>
      </Grid>
    </main>
  );
};

export default KalendariumPage;
