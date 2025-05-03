'use client';
import Head from 'next/head';
import {
  CardTitle,
  CardHeader,
  Card,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { Ellipsis, MessageSquareText, Paperclip, Plus } from 'lucide-react';
import dataProvider from '@/data/dataProvider';

export async function getStaticProps() {
  return { props: { bodyClasses: '' } };
}

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <title></title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-tailwind.png'
        />
      </Head>
      <div className='py-4 px-4'>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 w-full md:w-1/3'>
            <Card className='mb-6'>
              <CardHeader className='p-3 px-6 space-y-0 flex flex-row items-center justify-between gap-3'>
                <CardTitle className='text-base font-medium'>Open</CardTitle>
                <Badge variant='secondary' className='font-medium'>
                  3
                </Badge>
              </CardHeader>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Button variant='outline' className='w-full'>
              <Plus></Plus>Add New Task
            </Button>
          </div>
          <div className='p-4 w-full md:w-1/3'>
            <Card className='mb-6'>
              <CardHeader className='p-3 px-6 space-y-0 flex flex-row items-center justify-between gap-3'>
                <CardTitle className='text-base font-medium'>
                  In Progress
                </CardTitle>
                <Badge variant='secondary' className='font-medium'>
                  3
                </Badge>
              </CardHeader>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Button variant='outline' className='w-full'>
              <Plus></Plus>Add New Task
            </Button>
          </div>
          <div className='p-4 w-full md:w-1/3'>
            <Card className='mb-6'>
              <CardHeader className='p-3 px-6 space-y-0 flex flex-row items-center justify-between gap-3'>
                <CardTitle className='text-base font-medium'>
                  Finished
                </CardTitle>
                <Badge variant='secondary' className='font-medium'>
                  3
                </Badge>
              </CardHeader>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className='mb-4'>
              <CardHeader className='p-3 px-6 flex flex-wrap flex-row items-center justify-between gap-3'>
                <Badge variant='secondary' className='font-medium'>
                  Marketing
                </Badge>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-muted-foreground'
                >
                  <Ellipsis></Ellipsis>
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-1 text-base font-medium'>
                  Header for random activity
                </CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Random description for this task.
                </CardDescription>
              </CardContent>
              <CardFooter className='flex flex-wrap justify-between gap-2'>
                <div className='flex'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    ></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className='relative -ml-1 w-8 h-8'>
                    <AvatarImage src='' alt='@shadcn'></AvatarImage>
                    <AvatarFallback>+</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <div className='flex items-center gap-1'>
                    <MessageSquareText className='w-4 h-4'></MessageSquareText>
                    <span className='text-sm text-muted-foreground'>6</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Paperclip className='w-4 h-4'></Paperclip>
                    <span className='text-sm text-muted-foreground'>2</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Button variant='outline' className='w-full'>
              <Plus></Plus>Add New Task
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

