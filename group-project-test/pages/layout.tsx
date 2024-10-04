//layout which will be applied to all of the pages like basic



import { roboto } from '@/ui/fonts';

 

 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
       
     
     {children}
        
        </body>
    </html>
    
  );
}
