import React from 'react';
import { Card, Skeleton } from '@nextui-org/react';

const Cardskeleton = ({ numOfSkeletons = 4 }) => {
  return (
    <div className={`grid md:grid-cols-${numOfSkeletons} lg:grid-cols-${numOfSkeletons} grid-cols-1 gap-4 justify-items-center items-center w-11/12 mx-auto`}>
      {Array.from({ length: numOfSkeletons }).map((_, index) => (
        <Card key={index} className="w-full space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-72 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Cardskeleton;
