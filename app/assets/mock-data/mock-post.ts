import type { NextApiRequest, NextApiResponse } from "next";
type Posts = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
  review: string;
  tag: string[];
};
const posts: Posts[] = [
  {
    id: 1,
    title: "A Black Cat always is being near my car",
    review:
      "Black cats are the subject of myth, legend, and superstition. They are often associated with witches and good or bad luck in European folklore. A black cat resting on a fence.",
    content: `     <p class="text-white text-xl mb-1">Black cats are the subject of myth, legend, and superstition. They are often associated with witches and good or bad luck in European folklore. A black cat resting on a fence.

</p>
                  <div class="">
                    <Image
                      src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4oID6Zb741rJBZrSlM7Ibb%2Fbc74d5a0fb926e020a3192b52aaf4bfd%2F305105526_810584903453997_3812878049037845583_n.jpg&w=1920&q=75"
                      
                      alt="chó"
                      class=" object-cover w-full"
                      
                    />
                  </div>
    
                  <div>
                    <p class="text-white text-lg my-4">{thành vinh đã gọi đc api}</p>
                    <p class="text-white text-lg my-4">
                      Black cats are also adored for their sleek appearance and
                      distinct personalities. Their jet-black fur can look almost
                      velvet-like, especially when hit by sunlight, creating a
                      beautiful contrast with their usually golden or green eyes.
                      Despite any myths surrounding them, many people treasure black
                      cats for their elegance and playfulness.
                    </p>
                    <p class="text-white text-lg my-4">
                      Do you have a black cat or have a specific story in mind about
                      one?
                    </p>`,
    author: "Lolli Dang",
    createdAt: "2025-03-05T12:00:00Z",
    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4oID6Zb741rJBZrSlM7Ibb%2Fbc74d5a0fb926e020a3192b52aaf4bfd%2F305105526_810584903453997_3812878049037845583_n.jpg&w=1920&q=75",

    tag: ["Life"],
  },
  {
    id: 2,
    title: "IELTS Writting Task 2 - Advertising",
    review:
      "Advertising is all around us; it is an unavoidable part of everyone's life. Some people say that advertising is a positive part of our lives. To what extent do you agree or disagree?.",
    content: `     <p class="text-white text-xl mb-2">Advertising is all around us; it is an unavoidable part of everyone's life. Some people say that advertising is a positive part of our lives. To what extent do you agree or disagree?.

</p>
                  <div class="">
                    <Image
                      src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4UQWKOajZPZAaqCD5YOtsM%2Fb1e2b1369115d88b758a674083484e81%2FGeneral-Startup-Statistics.jpg&w=1920&q=75"
                      height={500}
                      alt="chó"
                      class=" object-cover w-full"
                      
                     
                    />
                  </div>
    
                  <div>
                    <p class="text-white text-lg my-4">In the Digital Marketing era, advertising is not only part of business strategy of a company, but also is a part of everybody’s daily routine. While some people do not like this type of strategy, others believe that it is something good for people's life. In my opinion, I partially agree with the statement due to the negative effects that commercials could cause on some customers.</p>
                    <p class="text-white text-lg my-4">
                      To begin with, all types of information are being published through advertisements. The main benefit is this data is available to everybody, so they can compare among brands before purchasing. For example, if someone is planning to buy goods on an e-commercial marketplace, but there is a bewildering range of possible options to choose then advertisements can help a customer to make the right choice which suits their pockets. Besides, creativity is part of advertising so creating beautiful posters to enjoy while travelling by airplane or by bus which makes up a colourful city.
                    </p>
                    <p class="text-white text-lg my-4">
                    On the other hand, some people consider that advertising is largely unnecessary and intrusive. It always appears annoyingly because it is constantly surrounded by loud images and sounds which disturb our personal lives. For instance, when you are enjoying a video on Youtube, a short advertising video intterrupts suddenly, that is a bad experience. Consequently, the clients will have a bad impression with advertisements as well as brands that made it. Moreover, there are companies proposing strategies such as editing colors of products compared to their real colors of it, quality exaggeration to appeal to more customers. It seems smart, but it will be a loss of confidence in users if they realize the fact.
                    </p>`,
    author: "Jane Smith",
    createdAt: "2025-03-04T10:30:00Z",
    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4UQWKOajZPZAaqCD5YOtsM%2Fb1e2b1369115d88b758a674083484e81%2FGeneral-Startup-Statistics.jpg&w=1920&q=75",

    tag: ["English"],
  },
  {
    id: 3,
    title: "Tạo Border gradient color bằng Tailwind CSS",
    review:
      "Advertising is all around us; it is an unavoidable part of everyone's life. Some people say that advertising is a positive part of our lives. To what extent do you agree or disagree?.",
    content: `     <p class="text-white text-xl mb-2">Advertising is all around us; it is an unavoidable part of everyone's life. Some people say that advertising is a positive part of our lives. To what extent do you agree or disagree?.

    </p>
                      <div class="">
                        <Image
                          src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4UQWKOajZPZAaqCD5YOtsM%2Fb1e2b1369115d88b758a674083484e81%2FGeneral-Startup-Statistics.jpg&w=1920&q=75"
                          height={500}
                          alt="chó"
                          class=" object-cover w-full"
                          
                         
                        />
                      </div>
        
                      <div>
                     <p class="mt-4 text-white text-xl">Trong Tailwind CSS, bạn có thể tạo viền (border) bao quanh đoạn văn bản bằng cách sử dụng lớp border cùng với các thuộc tính điều chỉnh như border-color, border-radius, border-width, v.v.</p>

                      `,
    author: "THÀNH VINH",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F73y5YgGQEy7HJORmpYBvMf%2Fc831f74b30788d6cf4d62a10ae75bbb8%2FBLOG_BuildingCustomReferenceApp.png&w=1920&q=75",
    tag: ["Styling"],
  },
  {
    id: 4,

    title: "Thuật toán Diagonal Difference",
    review: "Một thuật toán cấp độ dễ trên Hackerrank.",
    content: ` <p class="text-white text-xl mb-2">Một thuật toán cấp độ dễ trên Hackerrank..

</p>
                  <div class="">
                    <Image
                      src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F2QDUuhdSg6mFTHvKiCKRCv%2F863b2c9e389f9808914c50cc6229d0da%2Fzabbix_4be7d185fd.png&w=1920&q=75"
                      height={500}
                      alt="chó"
                      class=" object-cover w-full"
                      
                     
                    />
                  </div>
    
                  <div>
                    <p class="text-white text-lg my-4">Cho một ma trận vuông, tính toán sự khác biệt tuyệt đối giữa các tổng của các đường chéo của nó..</p>
                    <p class="text-white text-xl my-4"> Ví dụ:</p>
                    <div class="bg-[rgb(212,239,243)]  rounded-xl p-10">
                     <table class="w-full">
                      <tr class="bg-[rgb(156,163,175)] ">
                      <td class="p-4"><p class="my-4">Array</p></td>
                      <td class="p-4"><p class="my-4">11</p></td>
                      <td class="p-4"><p class="my-4">12</p></td>
                      <td class="p-4"><p class="my-4">13</p></td>
                    </tr>
                     
                       <tr class="bg-[rgb(107,114,128)] ">
                      <td class="p-4"><p class="my-4">Array</p></td>
                      <td class="p-4"><p class="my-4">11</p></td>
                      <td class="p-4"><p class="my-4">12</p></td>
                      <td class="p-4"><p class="my-4">13</p></td>
                    </tr>
                     <tr class="bg-[rgb(156,163,175)] ">
                      <td class="p-4"><p class="my-4">Array</p></td>
                      <td class="p-4"><p class="my-4">11</p></td>
                      <td class="p-4"><p class="my-4">12</p></td>
                      <td class="p-4"><p class="my-4">13</p></td>
                    </tr>
                     </table>
                    
                    
                    </div>

                    <div class="py-12 px-8" >
                    <Image
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='44px' width='44px'%3E%3Cpath fill='%2382af3a' d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z' /%3E%3C/svg%3E%0A"
                    />
                     <p class="text-white font-semibold italic mt-4">Đường chéo từ trái sang phải = 11 + 5 + (-12) = 4. Bên phải sang trái chéo = 4 + 5+ 10 = 19. Sự khác biệt tuyệt đối của chúng là:</p>
                     <p class="text-white text-xl font-bold my-4">| 4 - 19 | = 15</p>
                    
                    </div>


                    <p class="text-white font-semibold my-4 text-xl"> Video thực hành:</p>
                    
                    <iframe 
                    class="w-full h-[483px]" 
                    src="https://www.youtube.com/embed/o1jPFxpAIZo" 
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <p class="text-white  italic  font-semibold mt-9"> Nguồn Happy Coder</p>
                    
                    `,
    author: "THÀNH VINH",
    createdAt: "2025-03-03T09:15:00Z",
    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F6wFr7cvs42EjuIGRPccydi%2Ff3e3e8110bbb57c90e2cb88563f03d55%2FScreenshot_2024-09-16_at_5.45.01_PM.png&w=1920&q=75",
    tag: ["Algorithm", "Technology"],
  },
  {
    id: 5,
    title: "Một 'nhà biên soạn' trong source code của bạn",
    review: `Bắt đầu cho series dài tập.... "Những kỹ thuật mà tui đã học lõm" - Phần 1`,
    content: `     <p class="text-white text-xl mb-2">Bắt đầu cho series dài tập.... "Những kỹ thuật mà tui đã học lõm" - Phần 1

.

    </p>
                      <div class="">
                        <Image
                          src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F6wFr7cvs42EjuIGRPccydi%2Ff3e3e8110bbb57c90e2cb88563f03d55%2FScreenshot_2024-09-16_at_5.45.01_PM.png&w=1920&q=75"
                          height={500}
                          alt="chó"
                          class=" object-cover w-full"
                          
                         
                        />
                      </div>
        
                      <div>
                     <p class="mt-4 text-white text-xl font-bold mb-2">Vấn đề:</p>
                     <p class="my-4 text-white text-lg">Dùng If else nhiều để render layout có tốt không ? Chúng ta có câu chuyện như sau:</p>
                     <p class="mb-4  text-white text-lg">Render 1 mảng thành các card items nhưng các card items đó có một vài items có giao diện đặc biệt... À, đến lúc này chúng ta sẽ nghĩ "Vậy thì dùng if else chứ có gì khó đâu...." , nhưng mọi chuyện chưa dừng lại ở đó, đùng cái designer báo, anh trai Dev ơi, sếp mới kêu em update design, có thêm 1 loại giao diện mới nữa cho card items nè. Và rồi ta lại phải "if... else" tiếp sao?</p>
                    <div/>

                     <div class="py-12 px-8" >
                    <Image
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='44px' width='44px'%3E%3Cpath fill='%2382af3a' d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z' /%3E%3C/svg%3E%0A"
                    />
                     <p class="text-white font-semibold italic mt-4">Matcher : điều kiện</p>
                     <p class="text-white  font-semibold my-4">Render : React Component mà bạn muốn render</p>
                    
                    </div>
                     <p class="my-4 text-white text-lg">Sau đó chúng ta sẽ dùng map function của lodash với tham số 1 là array object, tham số 2 là 1 callback function và tham số của callback function này chính là các phần tử trong array object.</p>
                     <p class="mb-4  text-white text-lg">Callback function này sẽ có nhiệm vụ kiểm tra và format những phần tử object theo 1 pattern gồm matcher và render.</p>
                     <p class="mb-4  text-white text-lg">Sau khi ListFnc đã có , chúng ta sẽ dùng find function của lodash để tìm ra phần tử thỏa điều kiện và render Component tương ứng.</p>

                      `,
    author: "TUẤN ANH",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F6wFr7cvs42EjuIGRPccydi%2Ff3e3e8110bbb57c90e2cb88563f03d55%2FScreenshot_2024-09-16_at_5.45.01_PM.png&w=1920&q=75",
    tag: ["Technology"],
  },
  {
    id: 6,
    title: "A 'concert' titled Product and reality",
    review: `Experiences and experiences gained after more than 1 year of working at the product company" - Phần 1`,
    content: `<p class="text-white text-xl mb-2">Experiences and experiences gained after more than 1 year of working at the product company</p>
       <div class="">
                        <Image
                          src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4mzaIlTZwtUk77j3MV6Rnd%2F15d8b10c5fa057601dd5fc15bc2fbc84%2F274866435_715565969825492_2241802216657602377_n_08cc913a7c_lw16v9.jpg&w=3840&q=75"
                          height={500}
                          alt="chó"
                          class=" object-cover w-full"
                          
                         
                        />
                      </div>

                      <p class="text-white text-lg mb-2">Among us, I think everyone will want to have a start-up, own a business built by themselves, right? Is this easy or difficult in your opinion?

</p>
      `,
    author: "CƯỜNG",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F4mzaIlTZwtUk77j3MV6Rnd%2F15d8b10c5fa057601dd5fc15bc2fbc84%2F274866435_715565969825492_2241802216657602377_n_08cc913a7c_lw16v9.jpg&w=3840&q=75",
    tag: ["Life"],
  },
  {
    id: 7,
    title: "Export và import Content model , content data và entries",
    review: `While using traditional CMS architecture has been the standard, companies are now looking for increased flexibility and scalability provided by headless CMS solutions. Learn about the difference between headless CMS versus decoupled CMS architecture and why enterprises are embracing content infrastructure." - Phần 1`,
    content: `<p class="text-white text-lg mb-2"> While using traditional CMS architecture has been the standard, companies are now looking for increased flexibility and scalability provided by headless CMS solutions. Learn about the difference between headless CMS versus decoupled CMS architecture and why enterprises are embracing content infrastructure.</p>
    
     <div class="">
                        <Image
                          src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F5QUDL1OPro6gQY5ypCj8mJ%2Fa1263c08e61602e286055b487fe19643%2F1212.png&w=1920&q=75"
                          height={500}
                          alt="chó"
                          class=" object-cover w-full"
                          
                         
                        />
                      </div>
                      <p class="text-white text-lg mt-2 mb-7">While using traditional CMS architecture has been the standard, companies are now looking for increased flexibility and scalability provided by headless CMS solutions. Learn about the difference between headless CMS versus decoupled CMS architecture and why enterprises are embracing content infrastructure.

</p>
    `,
    author: "THÀNH VINH",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F5QUDL1OPro6gQY5ypCj8mJ%2Fa1263c08e61602e286055b487fe19643%2F1212.png&w=1920&q=75",
    tag: ["CMS"],
  },
  {
    id: 8,
    title: "The first time setup Contentful",
    review: `Sign in with Github account.
Create a content type.
Build content model.
Add your first data.`,
    content: `<p class="text-white text-lg mb-2"> Sign in with Github account.<br/>
Create a content type.<br/>
Build content model.<br/>
Add your first data.</p>
    
     <div class="">
                        <Image
                          src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F2HVDpWKIrNVwQ6AMrNvKsh%2Fec1650f9db014b59ddd4ed9eebee328e%2Fscott-graham-5fNmWej4tAA-unsplash.jpg&w=1920&q=75"
                          height={500}
                          alt="chó"
                          class=" object-cover w-full"
                          
                         
                        />
                      </div>
                      <p class="text-white text-lg mt-2 mb-7">1. Sign in with Github account. 2. Create a content type. 3. Build content model. 4. Add your first data.



</p>
    `,
    author: "THÀNH VINH",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F2HVDpWKIrNVwQ6AMrNvKsh%2Fec1650f9db014b59ddd4ed9eebee328e%2Fscott-graham-5fNmWej4tAA-unsplash.jpg&w=1920&q=75",
    tag: ["CMS"],
  },
  {
    id: 9,
    title: "Set up a network monitor with Zabbix",
    review: `I used to face a critical problem in network system of my company. The number of package were sent to Git server rose dramatically and everythings became worse when all network system was disconnected . How will you handle if stuck the same issue?`,
    content: ` <p class="text-white text-lg mb-2"> I used to face a critical problem in network system of my company. The number of package were sent to Git server rose dramatically and everythings became worse when all network system was disconnected . How will you handle if stuck the same issue?

</p>
        
         <div class="">
                            <Image
                              src="https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F2QDUuhdSg6mFTHvKiCKRCv%2F863b2c9e389f9808914c50cc6229d0da%2Fzabbix_4be7d185fd.png&w=1920&q=75"
                              height={500}
                              alt="chó"
                              class=" object-cover w-full"
                              
                             
                            />
                          </div>
                          <p class="text-white text-lg mt-2 mb-7">I used to face a critical problem in network system of my company. The number of package were sent to Git server rose dramatically and everythings became worse when all network system was disconnected . How will you handle if stuck the same issue?


    
    
    
    </p>
        `,
    author: "THÀNH VINH",
    createdAt: "2025-03-03T09:15:00Z",

    image:
      "https://ahphong.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fln7oca3i8ulo%2F2QDUuhdSg6mFTHvKiCKRCv%2F863b2c9e389f9808914c50cc6229d0da%2Fzabbix_4be7d185fd.png&w=1920&q=75",
    tag: ["Technology"],
  },
];

export default posts;
