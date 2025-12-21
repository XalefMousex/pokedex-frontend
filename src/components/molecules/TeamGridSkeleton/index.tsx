'use client';

import { motion } from 'framer-motion';

import { Card } from 'components/atoms/Card';

import { type TeamGridSkeletonProps } from './types';

const TeamCardSkeleton = ({ ...props }: TeamGridSkeletonProps) => (
  <Card className="overflow-hidden" {...props}>
    <div className="p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div
            className={`
              h-6 w-32 animate-pulse rounded-sm bg-gray-200
              dark:bg-shark-950
            `}
          />
          <div
            className={`
              h-4 w-20 animate-pulse rounded-sm bg-gray-200
              dark:bg-shark-950
            `}
          />
        </div>
        <div className="flex gap-1">
          <div
            className={`
              size-10 animate-pulse rounded-sm bg-gray-200
              dark:bg-shark-950
            `}
          />
          <div
            className={`
              size-10 animate-pulse rounded-sm bg-gray-200
              dark:bg-shark-950
            `}
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className={`
              aspect-square animate-pulse rounded-lg bg-gray-200
              dark:bg-shark-950
            `}
            key={index}
          />
        ))}
      </div>

      <div className="space-y-2">
        <div
          className={`
            h-4 animate-pulse rounded-sm bg-gray-200
            dark:bg-shark-950
          `}
        />
        <div className="flex gap-1">
          <div
            className={`
              h-6 w-16 animate-pulse rounded-full bg-gray-200
              dark:bg-shark-950
            `}
          />
          <div
            className={`
              h-6 w-16 animate-pulse rounded-full bg-gray-200
              dark:bg-shark-950
            `}
          />
        </div>
      </div>
    </div>
  </Card>
);

export const TeamGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div
    className={`
      grid gap-6
      md:grid-cols-2
      lg:grid-cols-3
    `}
  >
    {Array.from({ length: count }).map((_, index) => (
      <motion.div
        key={index}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: index * 0.05 }}
      >
        <TeamCardSkeleton />
      </motion.div>
    ))}
  </div>
);
