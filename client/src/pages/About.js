
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
