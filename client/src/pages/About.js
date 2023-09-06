
// export default function About() {

//     return (
//         <div>

//   <body>
//     <div class="about">
//         <header>
//             <h1>About Task Tracker App</h1>
//          </header>
       
//         <main>

//             <section>
            
//                 <h2>Introduction</h2>
//                 <p>
//                     OpenAI is a research organization and technology company that focuses on artificial intelligence (AI) and machine learning advancements. It was founded with a mission to ensure that AI benefits all of humanity and to build safe, powerful, and beneficial AI technologies.
//                 </p>
//             </section>

//             <section>
//                 <h2>History</h2>
//                 <p>
//                     OpenAI was established in December 2015 by a group of influential tech visionaries and AI researchers, including Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba, among others. The idea behind OpenAI was to create a non-profit organization that would promote and develop AI in a way that prioritizes positive societal impact over profit motives.
//                 </p>
//                 <p>
//                     Over time, OpenAI evolved its organizational structure and funding model. In 2019, OpenAI became a for-profit company, OpenAI LP, with the goal of attracting additional investment to support its ambitious research and development efforts. Despite this change, the company's commitment to its core principles remained unwavering.
//                 </p>
//             </section>

//             <section>
//                     <h2>ChatBot AI</h2>
//                     <p>
//                         ChatBotAI is an intelligent chatbot application powered by cutting-edge natural language processing models from OpenAI. It allows users to interact with the chatbot by asking questions on various topics and receiving informative and accurate answers. This ChatBot AI uses the "Model Test-Davinci 003".
//                     </p>
//             </section>

//             <section>
//                     <h2>How it Works</h2>
//                     <p>
//                         ChatBotAI utilizes the OpenAI API, which enables it to understand natural language and generate human-like responses. The application sends user queries to the API, which processes the input and returns the chatbot's responses based on advanced language models.
//                     </p>
//              </section>


//             <section>
//                     <h2>Features</h2>
//                     <p>
//                         ChatBotAI offers the following features:
//                         <ul>
//                             <li>Ask Any Question: Users can ask any question on various subjects, ranging from general knowledge to specific topics.</li>
//                             <li>Instant Answers: The chatbot provides real-time answers, ensuring a smooth and responsive user experience.</li>
//                             <li>Language Support: ChatBotAI supports multiple languages, allowing users to interact in their preferred language.</li>
//                             <li>Accuracy and Reliability: Powered by OpenAI's advanced models, the chatbot delivers accurate and reliable information.</li>
//                         </ul>
//                     </p>
//                 </section>

//             <section>
//                 <h2>Contributions to AI Research</h2>
//                 <p>
//                     OpenAI has been at the forefront of AI research, achieving numerous breakthroughs in various domains. One of its most significant contributions was the development of GPT (Generative Pre-trained Transformer) language models. GPT-2, released in 2019, showcased the remarkable ability of language models to generate human-like text and sparked discussions on the potential misuse of such technology.
//                 </p>
//                 <p>
//                     Building on the success of GPT-2, OpenAI introduced GPT-3, which took natural language processing to new heights. GPT-3, released in 2020, boasted an impressive 175 billion parameters, making it one of the largest and most powerful language models at the time. Its versatility and capacity for understanding context led to a wide range of applications, from chatbots to content generation.
//                 </p>
//             </section>

//             <section>
//                 <h2>Mission and Ethics</h2>
//                 <p>
//                     OpenAI's mission revolves around ensuring that artificial general intelligence (AGI) benefits all of humanity. AGI refers to highly autonomous systems that outperform humans at most economically valuable work. OpenAI aims to build AGI that is safe, beneficial, and aligned with human values while also advocating for the responsible development and deployment of AI technologies worldwide.
//                 </p>
//                 <p>
//                     The organization actively engages in research and policy advocacy to address AI's potential challenges, including issues related to fairness, transparency, and accountability. OpenAI remains committed to long-term safety and is dedicated to preventing uses of AI or AGI that could harm humanity or concentrate power in the hands of a few.
//                 </p>
//             </section>

//             <section>
//                     <h2>Privacy and Security</h2>
//                     <p>
//                         At ChatBotAI, user privacy and data security are of utmost importance. All user queries are processed anonymously, and no personally identifiable information is stored. We ensure that your interactions with the chatbot remain private and secure.
//                     </p>
//             </section>
//         </main>
//         <footer>
//             <p>&copy; 2023 All rights reserved.</p>
//         </footer>
//     </div>
// </body>          
//         </div>
//     )
// }


import React from 'react';

export default function About() {
    return (
        <div>
            <body>
                <div className="about">
                    <header>
                        <h1>About Task Tracker App</h1>
                    </header>

                    <main>

                        <section>
                            <h2>Introduction</h2>
                            <p>
                                Task Tracker App is a powerful task management application designed to help users efficiently organize their tasks and increase productivity. It offers a range of features, including user management, authentication, authorization, task creation, updates, and deletion.
                            </p>
                        </section>

                        <section>
                            <h2>Key Features</h2>
                            <p>
                                Task Tracker App provides a comprehensive set of features to streamline your task management process:
                            </p>
                            <ul>
                                <li>User Management: Create and manage different users, each with their own secure login credentials.</li>
                                <li>Authentication and Authorization: Ensure data security with robust authentication and authorization mechanisms.</li>
                                <li>Task Management: Create, update, and delete tasks with ease, including attributes such as title, description, priority, and status.</li>
                                <li>Task Attributes:
                                    <ul>
                                        <li>Priority: Assign tasks a priority level, choosing from "Low," "Medium," or "High."</li>
                                        <li>Status: Track the progress of tasks with status options like "To Do," "In Progress," and "Completed."</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>How It Works</h2>
                            <p>
                                Task Tracker App provide a user experience. User authentication ensures that only authorized users can access and manage tasks. Users can create tasks, set their priority and status, and update them as they progress.
                            </p>
                        </section>

                    </main>
                    <footer>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </footer>
                </div>
            </body>
        </div>
    );
}
