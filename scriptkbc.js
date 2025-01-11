const questions = [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Control Program Unit", "Computer Personal Unit", "Central Program Unit"], correct: 0 },
    { question: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "John von Neumann"], correct: 1 },
    { question: "Which sport uses the term 'love'?", options: ["Tennis", "Cricket", "Football", "Hockey"], correct: 0 },
    { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"], correct: 1 },
    { question: "Which is the largest planet in the Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Analyze Memory"], correct: 0 },
    { question: "Who won the FIFA World Cup 2022?", options: ["Argentina", "France", "Brazil", "Germany"], correct: 0 },
    { question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Yamuna", "Brahmaputra"], correct: 1 },
    { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "120°C", "80°C"], correct: 1 },
    { question: "Which Indian cricketer is known as the 'God of Cricket'?", options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Kapil Dev"], correct: 2 },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"], correct: 0 },
    { question: "Which programming language is known for web development?", options: ["Python", "JavaScript", "C++", "Swift"], correct: 1 },
    { question: "What is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Marigold"], correct: 1 },
    { question: "Which planet is known as the 'Red Planet'?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct: 2 },
    { question: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Lal Bahadur Shastri"], correct: 1 },
    { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HyperText Transfer Portal", "HyperText Transmission Protocol", "Hyper Transfer Text Protocol"], correct: 0 },
    { question: "Which sport is associated with the term 'Hat-trick'?", options: ["Cricket", "Football", "Hockey", "All of the above"], correct: 3 },
    { question: "What is the national animal of India?", options: ["Elephant", "Tiger", "Lion", "Peacock"], correct: 1 },
    { question: "Which country is known as the 'Land of the Rising Sun'?", options: ["China", "Japan", "Korea", "Thailand"], correct: 1 },
    { question: "Which is the smallest continent by area?", options: ["Australia", "Europe", "Antarctica", "South America"], correct: 0 },
    { question: "What is the full form of AI?", options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Integration", "Artificial Integration"], correct: 0 },
    { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Larry Page", "Mark Zuckerberg"], correct: 1 },
    { question: "What does DNS stand for?", options: ["Domain Name System", "Data Network System", "Digital Network Server", "Domain Network Server"], correct: 0 },
    { question: "Which team won the ICC Cricket World Cup 2011?", options: ["Sri Lanka", "India", "Australia", "Pakistan"], correct: 1 },
    { question: "What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Au", "Pt"], correct: 2 },
    { question: "What does LAN stand for?", options: ["Local Area Network", "Large Area Network", "Limited Access Network", "Local Access Network"], correct: 0 },
    { question: "Who is the current Prime Minister of India (as of 2025)?", options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"], correct: 0 },
    { question: "What is the national bird of India?", options: ["Peacock", "Sparrow", "Eagle", "Crow"], correct: 0 },
    { question: "Which sport is associated with the term 'Deuce'?", options: ["Tennis", "Badminton", "Basketball", "Football"], correct: 0 },
    { question: "What is the shortcut key to save a file in most software?", options: ["Ctrl + S", "Ctrl + C", "Ctrl + P", "Ctrl + V"], correct: 0 },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: 2 },
    { question: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"], correct: 0 },
    { question: "What does GPU stand for?", options: ["Graphics Processing Unit", "General Processing Unit", "Graphical Program Unit", "General Program Unit"], correct: 0 },
    { question: "Which river flows through Paris?", options: ["Thames", "Seine", "Danube", "Rhine"], correct: 1 },
    { question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], correct: 2 },
    { question: "Which year did India gain independence?", options: ["1945", "1947", "1950", "1946"], correct: 1 },
    { question: "What is the binary representation of the decimal number 10?", options: ["1010", "1001", "1100", "1110"], correct: 0 },
    { question: "Which of the following is a markup language?", options: ["HTML", "C++", "Python", "Java"], correct: 0 },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"], correct: 0 },
    { question: "Which programming language is known as the 'mother of all languages'?", options: ["C", "Python", "Java", "Assembly"], correct: 0 },
    { question: "Which sorting algorithm has the best average-case time complexity?", options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"], correct: 1 },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "Sequential Query Language"], correct: 0 },
    { question: "Who won the Ballon d'Or in 2021?", options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Luka Modric"], correct: 0 },
    { question: "Which country launched the first satellite into space?", options: ["USA", "Russia", "China", "India"], correct: 1 },
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "What is the smallest unit of data in computing?", options: ["Byte", "Bit", "Nibble", "Kilobyte"], correct: 1 },
    { question: "What is the main ingredient in 'Rasgulla'?", options: ["Flour", "Paneer", "Rice", "Milk"], correct: 1 },
    { question: "Which of the following is a client-side scripting language?", options: ["JavaScript", "Python", "PHP", "Ruby"], correct: 0 },
    { question: "Which country won the most gold medals in Tokyo 2020 Olympics?", options: ["USA", "China", "Japan", "India"], correct: 0 },
    { question: "What is the primary function of an operating system?", options: ["Text editing", "Database management", "Resource management", "Networking"], correct: 2 },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kanchenjunga", "Makalu"], correct: 0 },
    { question: "Which Indian scientist is known as the 'Missile Man of India'?", options: ["APJ Abdul Kalam", "Homi Bhabha", "C.V. Raman", "Vikram Sarabhai"], correct: 0 },
    { question: "What is the hexadecimal representation of the decimal number 255?", options: ["0xFF", "0xF0", "0xAA", "0x00"], correct: 0 },
    { question: "Which layer in the OSI model handles routing and forwarding?", options: ["Transport Layer", "Network Layer", "Data Link Layer", "Physical Layer"], correct: 1 },
    { question: "Which city hosted the 2024 Summer Olympics?", options: ["Paris", "Tokyo", "Los Angeles", "Brisbane"], correct: 0 },
    { question: "What is the unit of electrical resistance?", options: ["Ohm", "Ampere", "Volt", "Watt"], correct: 0 },
    { question: "Which protocol is used to send emails?", options: ["HTTP", "SMTP", "IMAP", "FTP"], correct: 1 },
    { question: "Who discovered gravity?", options: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Nikola Tesla"], correct: 1 },
    { question: "What is the primary use of the command 'ping'?", options: ["Testing network connectivity", "File transfer", "Disk cleanup", "System reboot"], correct: 0 },
    { question: "Which Nobel Prize is awarded for peace?", options: ["Nobel Peace Prize", "Nobel Chemistry Prize", "Nobel Physics Prize", "Nobel Literature Prize"], correct: 0 },
    { question: "What is the primary function of the OSI transport layer?", options: ["Encryption", "Routing", "End-to-end communication", "Data framing"], correct: 2 },
    { question: "Which algorithm is used for shortest path in graphs?", options: ["Kruskal", "Dijkstra", "Prim", "Bellman-Ford"], correct: 1 },
    { question: "What is India's national sport?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], correct: 1 },
    { question: "What does DNS resolve?", options: ["IP address to hostname", "Hostname to IP address", "MAC address to IP address", "IP address to MAC address"], correct: 1 },
    { question: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
    { question: "What is the default subnet mask for a Class C IP address?", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], correct: 2 },
    { question: "What is the result of the Boolean expression: (1 AND 0 OR 1)?", options: ["0", "1", "Undefined", "Error"], correct: 1 },
    { question: "Which country won the Cricket World Cup 2019?", options: ["India", "Australia", "England", "New Zealand"], correct: 2 },
    { question: "What is the value of π (pi) to two decimal places?", options: ["3.14", "3.15", "3.16", "3.13"], correct: 0 },
    { question: "Which country has the most FIFA World Cup titles?", options: ["Argentina", "Brazil", "Italy", "Germany"], correct: 1 },
    { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Link", "Uniform Resource Link"], correct: 0 },
    { question: "Who wrote 'A Brief History of Time'?", options: ["Stephen Hawking", "Carl Sagan", "Isaac Asimov", "Neil deGrasse Tyson"], correct: 0 },
    { question: "Which sport is associated with Wimbledon?", options: ["Tennis", "Badminton", "Table Tennis", "Golf"], correct: 0 },
    { question: "Which is the smallest prime number?", options: ["1", "2", "3", "5"], correct: 1 },
    { question: "Who is the current Secretary-General of the United Nations (2025)?", options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "U Thant"], correct: 0 },
    { question: "What is the process of finding errors in software called?", options: ["Compiling", "Testing", "Debugging", "Programming"], correct: 2 },
    { question: "Who developed Linux?", options: ["Linus Torvalds", "Richard Stallman", "Dennis Ritchie", "Ken Thompson"], correct: 0 },
    { question: "What is the default port for HTTP?", options: ["80", "443", "21", "22"], correct: 0 },
    { question: "Which is the lightest element?", options: ["Hydrogen", "Helium", "Lithium", "Carbon"], correct: 0 },
    { question: "What is the SI unit of energy?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 0 },
    { question: "What is the complexity of Quicksort in the worst case?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correct: 2 },
    { question: "Which is the first Indian satellite?", options: ["Bhaskara", "Aryabhata", "Rohini", "INSAT"], correct: 1 },
    { question: "What is the expansion of the acronym USB?", options: ["Universal System Bus", "Universal Serial Bus", "Unified System Bus", "Unified Serial Bus"], correct: 1 },
    { question: "Which Indian cricketer is known as the 'Little Master'?", options: ["Sachin Tendulkar", "Sunil Gavaskar", "Virat Kohli", "Rahul Dravid"], correct: 1 },
    { question: "Which company developed the Java programming language?", options: ["Microsoft", "Apple", "Oracle", "Sun Microsystems"], correct: 3 },
    { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Read Allocate Memory", "Random Allocation Memory"], correct: 0 },
    { question: "Who won the FIFA World Cup 2022?", options: ["Brazil", "France", "Argentina", "Germany"], correct: 2 },
    { question: "What is the base of the hexadecimal number system?", options: ["2", "8", "10", "16"], correct: 3 },
    { question: "Which Indian state has the largest coastline?", options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"], correct: 2 },
    { question: "Which planet is known as the 'Red Planet'?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 1 },
    { question: "What is the default protocol used for secure web connections?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
    { question: "Who is the founder of SpaceX?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Richard Branson"], correct: 1 },
    { question: "Which Indian city is also known as the 'Silicon Valley of India'?", options: ["Mumbai", "Hyderabad", "Chennai", "Bengaluru"], correct: 3 },
    { question: "What is the full form of TCP in networking?", options: ["Transmission Control Protocol", "Transfer Control Protocol", "Telecommunication Control Protocol", "Transport Communication Protocol"], correct: 0 },
    { question: "What is the binary equivalent of the decimal number 10?", options: ["1010", "1100", "1001", "1110"], correct: 0 },
    { question: "Which layer in the OSI model is responsible for encryption?", options: ["Transport Layer", "Application Layer", "Presentation Layer", "Session Layer"], correct: 2 },
    { question: "Who is the author of 'The God of Small Things'?", options: ["Arundhati Roy", "Jhumpa Lahiri", "Chetan Bhagat", "Kiran Desai"], correct: 0 },
    { question: "What is the height of Mount Everest?", options: ["8,848 meters", "8,850 meters", "8,900 meters", "8,600 meters"], correct: 0 },
    { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"], correct: 2 },
    { question: "What is the smallest prime number greater than 10?", options: ["11", "13", "17", "19"], correct: 0 },
    { question: "What is the Big-O complexity of Merge Sort?", options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"], correct: 2 },
    { question: "Which programming language is known as the 'mother of all languages'?", options: ["C", "Python", "Java", "Assembly"], correct: 0 },
    { question: "Which Indian city hosted the 2023 G20 Summit?", options: ["Delhi", "Mumbai", "Lucknow", "New Delhi"], correct: 3 },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Gd", "Pt"], correct: 1 },
    { question: "Which port number is used by HTTPS?", options: ["80", "21", "443", "22"], correct: 2 },
    { question: "Which Indian player holds the record for the fastest 100 in ODI cricket?", options: ["Rohit Sharma", "Virat Kohli", "Kapil Dev", "Yuvraj Singh"], correct: 2 },
    { question: "What does DNS stand for?", options: ["Dynamic Name System", "Domain Name System", "Domain Name Service", "Dynamic Network System"], correct: 1 },
    { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], correct: 0 },
    { question: "Which component of the CPU executes instructions?", options: ["ALU", "CU", "Registers", "Cache"], correct: 0 },
    { question: "What is the term for data corruption due to simultaneous access in databases?", options: ["Deadlock", "Dirty Read", "Race Condition", "Phantom Read"], correct: 2 },
    { question: "What is the smallest continent in the world?", options: ["Europe", "Australia", "Antarctica", "South America"], correct: 1 },
    { question: "Which Indian was the first to win the Nobel Prize?", options: ["CV Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"], correct: 1 },
    { question: "What is the name of India's first supercomputer?", options: ["Param", "Agni", "Prithvi", "Aryabhata"], correct: 0 },
    { question: "Which software company developed Windows OS?", options: ["Apple", "Microsoft", "IBM", "Google"], correct: 1 },
    { question: "What does GPU stand for?", options: ["Graphical Processing Unit", "General Processing Unit", "Graphical Protocol Unit", "Graphics and Parallel Unit"], correct: 0 },
    { question: "Which year did India gain independence?", options: ["1945", "1946", "1947", "1950"], correct: 2 },
    { question: "What is the speed of light in a vacuum?", options: ["299,792 km/s", "300,000 km/s", "250,000 km/s", "200,000 km/s"], correct: 0 },
    { question: "Which Indian city is known as the 'City of Lakes'?", options: ["Udaipur", "Jaipur", "Bhopal", "Nainital"], correct: 0 },
    { question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Deque", "Priority Queue"], correct: 1 },
    { question: "What is the national animal of India?", options: ["Elephant", "Peacock", "Tiger", "Lion"], correct: 2 },
    { question: "What is the maximum value of an unsigned 8-bit integer?", options: ["255", "256", "127", "128"], correct: 0 },
    { question: "Which country won the most FIFA World Cups?", options: ["Germany", "Brazil", "Italy", "Argentina"], correct: 1 },
    { question: "Which data structure is used in Breadth-First Search?", options: ["Stack", "Queue", "Priority Queue", "Deque"], correct: 1 },
    { question: "Who invented the C programming language?", options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"], correct: 0 },
    { question: "Which Indian state is known as the 'Land of Five Rivers'?", options: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"], correct: 0 },
    { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "Hyper Transfer Text Protocol"], correct: 0 },
    { question: "What is the chemical formula for water?", options: ["H2O", "O2H", "HO2", "H2"], correct: 0 },
    { question: "Who is known as the 'Father of the Indian Constitution'?", options: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], correct: 1 },
    { question: "Which sports equipment is used in tennis?", options: ["Bat", "Racket", "Stick", "Paddle"], correct: 1 },
    { question: "What does SSL stand for in networking?", options: ["Secure Socket Layer", "Secure System Layer", "Standard Socket Layer", "Secure Shell Layer"], correct: 0 },
    { question: "Who is the current CEO of Google (2024)?", options: ["Sundar Pichai", "Satya Nadella", "Elon Musk", "Tim Cook"], correct: 0 },
    { question: "Which is the world's highest waterfall?", options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Iguazu Falls"], correct: 1 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
    { question: "Who was the first human to travel into space?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Alan Shepard"], correct: 1 },
    { question: "Which Indian state is famous for the festival Pongal?", options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"], correct: 1 },
    { question: "What is the default IP address of localhost?", options: ["192.168.0.1", "127.0.0.1", "10.0.0.1", "172.16.0.1"], correct: 1 },
    { question: "Which organ in the human body filters blood?", options: ["Heart", "Kidney", "Liver", "Lungs"], correct: 1 },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"], correct: 0 },
    { question: "What is the default port number for SSH?", options: ["80", "21", "22", "443"], correct: 2 },
    { question: "What is the sum of the angles in a triangle?", options: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"], correct: 0 },
    { question: "What is the time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "Who is known as the 'Missile Man of India'?", options: ["Homi Bhabha", "APJ Abdul Kalam", "Vikram Sarabhai", "Raja Ramanna"], correct: 1 },
    { question: "Which is the smallest unit of memory?", options: ["Byte", "Bit", "Nibble", "Kilobyte"], correct: 1 },
    { question: "Which is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
    { question: "Which Indian cricketer holds the record for the highest individual score in ODIs?", options: ["Rohit Sharma", "Virender Sehwag", "MS Dhoni", "Sachin Tendulkar"], correct: 0 },
    { question: "What is the output of 2^3 in programming?", options: ["6", "8", "9", "10"], correct: 1 },
    { question: "Which protocol is used for email retrieval?", options: ["SMTP", "POP3", "HTTP", "FTP"], correct: 1 },
    { question: "Who was the first woman Prime Minister of India?", options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Meira Kumar"], correct: 1 },
    { question: "What is the highest civilian award in India?", options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"], correct: 2 },
    { question: "What is the national flower of India?", options: ["Rose", "Lotus", "Marigold", "Jasmine"], correct: 1 },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Alan Turing", "Steve Jobs"], correct: 0 },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], correct: 0 },
    { question: "What is the boiling point of water in Celsius?", options: ["50°C", "100°C", "150°C", "200°C"], correct: 1 },
    { question: "Which Indian state has the largest population?", options: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"], correct: 1 },
    { question: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "John Von Neumann", "Ada Lovelace"], correct: 1 },
    { question: "What does SQL stand for?", options: ["Simple Query Language", "Structured Query Language", "Sequential Query Language", "Standard Query Language"], correct: 1 },
    { question: "Which programming language is used for Android development?", options: ["Swift", "Java", "Python", "Ruby"], correct: 1 },
    { question: "What is the currency of Japan?", options: ["Yen", "Won", "Yuan", "Dollar"], correct: 0 },
    { question: "Which organ in the human body is responsible for pumping blood?", options: ["Liver", "Lungs", "Heart", "Kidney"], correct: 2 },
    { question: "What is the smallest two-digit prime number?", options: ["11", "13", "17", "19"], correct: 0 },
    { question: "Which algorithm is used for finding the shortest path in a graph with negative weights?", options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Prim's"], correct: 1 },
    { question: "Who is the author of the book 'A Brief History of Time'?", options: ["Carl Sagan", "Stephen Hawking", "Richard Feynman", "Neil deGrasse Tyson"], correct: 1 },
    { question: "What does the 'chmod' command do in Linux?", options: ["Change ownership", "Change permissions", "Change directory", "Compress files"], correct: 1 },
    { question: "In which year was the first iPhone released?", options: ["2005", "2007", "2008", "2010"], correct: 1 },
    { question: "What is the runtime complexity of QuickSort in the worst case?", options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"], correct: 0 },
    { question: "Which chemical element has the atomic number 79?", options: ["Silver", "Gold", "Platinum", "Mercury"], correct: 1 },
    { question: "Which Indian mathematician is known for his contributions to infinite series?", options: ["Aryabhata", "Srinivasa Ramanujan", "Brahmagupta", "Bhaskara II"], correct: 1 },
    { question: "Which programming language was primarily used to write the Linux kernel?", options: ["C", "Python", "Java", "Assembly"], correct: 0 },
    { question: "What is the tallest mountain in the solar system?", options: ["Olympus Mons", "Mount Everest", "Mauna Kea", "K2"], correct: 0 },
    { question: "Which Indian city is known as the 'City of Lakes'?", options: ["Udaipur", "Bhopal", "Srinagar", "Jaipur"], correct: 0 },
    { question: "What is the value of Euler's number (e) approximately?", options: ["2.72", "3.14", "1.61", "1.41"], correct: 0 },
    { question: "Which protocol is used for secure data transmission over the internet?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
    { question: "Who won the Nobel Prize in Physics in 2020 for the discovery of black hole formation?", options: ["Roger Penrose", "Albert Einstein", "Stephen Hawking", "Marie Curie"], correct: 0 },
    { question: "Which city hosted the first modern Olympic Games?", options: ["Athens", "Paris", "London", "Rome"], correct: 0 },
    { question: "Which ancient Indian text is considered a comprehensive treatise on medicine?", options: ["Rigveda", "Charaka Samhita", "Arthashastra", "Bhagavad Gita"], correct: 1 },
    { question: "In which year did the first email get sent?", options: ["1965", "1971", "1980", "1985"], correct: 1 },
    { question: "What is the primary difference between a stack and a queue?", options: ["FIFO vs LIFO", "Size", "Efficiency", "Storage"], correct: 0 },
    { question: "Which country is the largest producer of coffee?", options: ["Brazil", "Vietnam", "Colombia", "India"], correct: 0 },
    { question: "Which Indian scientist developed the monsoon theory?", options: ["C. V. Raman", "Jagadish Chandra Bose", "D. R. Gadgil", "M. N. Rajesh"], correct: 2 },
    { question: "What is the hexadecimal equivalent of binary 1110?", options: ["E", "F", "D", "C"], correct: 0 },
    { question: "Which sorting algorithm is the most efficient for large datasets?", options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "QuickSort"], correct: 3 },
    { question: "Who was the first Indian to win an individual Olympic gold medal?", options: ["Abhinav Bindra", "Leander Paes", "PV Sindhu", "Sushil Kumar"], correct: 0 },
    { question: "What is the main purpose of a firewall in computer networks?", options: ["Block viruses", "Manage bandwidth", "Filter traffic", "Improve speed"], correct: 2 },
    { question: "Which Nobel Prize-winning discovery is associated with Watson and Crick?", options: ["Structure of DNA", "Quantum Mechanics", "Relativity", "Gravity"], correct: 0 },
    { question: "Which Indian river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Brahmaputra", "Son"], correct: 1 },
    { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "tan(x)", "-tan(x)"], correct: 0 },
    { question: "Which is the most commonly used language for Android app development?", options: ["Java", "Kotlin", "Python", "Swift"], correct: 1 },
    { question: "Who is the current President of the United States (2024)?", options: ["Joe Biden", "Donald Trump", "Kamala Harris", "Ron DeSantis"], correct: 0 },
    { question: "Which layer of the OSI model is responsible for routing?", options: ["Transport", "Network", "Session", "Data Link"], correct: 1 },
    { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Arctic", "Antarctic"], correct: 3 },
    { question: "Who is the author of 'The Origin of Species'?", options: ["Isaac Newton", "Charles Darwin", "Gregor Mendel", "Albert Einstein"], correct: 1 },
    { question: "What is the hexadecimal value for the decimal number 255?", options: ["FF", "FE", "AA", "AB"], correct: 0 },
    { question: "What is the national sport of Canada?", options: ["Ice Hockey", "Lacrosse", "Cricket", "Rugby"], correct: 1 },
    { question: "Which programming language does TensorFlow primarily use?", options: ["Python", "C++", "R", "JavaScript"], correct: 0 },
    { question: "What does the 'ping' command test in networking?", options: ["Latency", "Bandwidth", "Signal Strength", "Data Packet Size"], correct: 0 },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Ada Lovelace"], correct: 0 },
    { question: "What is the SI unit of electric resistance?", options: ["Volt", "Ohm", "Ampere", "Watt"], correct: 1 },
    { question: "Which Indian state is the leading producer of tea?", options: ["Assam", "West Bengal", "Kerala", "Tamil Nadu"], correct: 0 },
    { question: "What is the output of 5! (factorial)?", options: ["120", "60", "24", "720"], correct: 0 },
    { question: "Which Indian missile is known as 'Agni'?", options: ["Ballistic", "Cruise", "Anti-Tank", "Surface-to-Air"], correct: 0 },
    { question: "Which company developed the React.js library?", options: ["Google", "Facebook", "Microsoft", "Amazon"], correct: 1 },
    { question: "What is the capital of Kazakhstan?", options: ["Astana", "Almaty", "Bishkek", "Tashkent"], correct: 0 },
    { question: "Which is the first planet discovered using a telescope?", options: ["Uranus", "Neptune", "Pluto", "Venus"], correct: 0 },
    { question: "What is the Big-O complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "What was the first high-level programming language?", options: ["FORTRAN", "COBOL", "Pascal", "BASIC"], correct: 0 },
    { question: "What does RAM stand for in computing?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Restricted Access Memory"], correct: 0 },
    { question: "Who holds the record for the fastest century in ODI cricket?", options: ["Chris Gayle", "AB de Villiers", "Virat Kohli", "Rohit Sharma"], correct: 1 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 },
    { question: "Which Indian freedom fighter founded the Indian National Army (INA)?", options: ["Mahatma Gandhi", "Bhagat Singh", "Subhas Chandra Bose", "Sardar Patel"], correct: 2 },
    { question: "What is the national flower of Japan?", options: ["Cherry Blossom", "Rose", "Lotus", "Tulip"], correct: 0 },
    { question: "Which Indian state is known as the 'Land of Five Rivers'?", options: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"], correct: 0 },
    { question: "What is the square root of 256?", options: ["12", "14", "16", "18"], correct: 2 },
    { question: "Which protocol is primarily used for email transmission?", options: ["HTTP", "SMTP", "FTP", "IMAP"], correct: 1 },
    { question: "Who wrote the famous play 'Macbeth'?", options: ["Christopher Marlowe", "William Shakespeare", "John Milton", "Geoffrey Chaucer"], correct: 1 },
    { question: "What is the maximum number of edges in a simple graph with 'n' vertices?", options: ["n^2", "n(n-1)/2", "n(n+1)/2", "n^3"], correct: 1 },
    { question: "Which scientist is known as the 'Father of the Green Revolution' in India?", options: ["M. S. Swaminathan", "Norman Borlaug", "C. V. Raman", "Hargobind Khorana"], correct: 0 },
    { question: "Which programming language is also known as the 'Swiss Army Knife of Programming'?", options: ["Python", "Java", "C++", "JavaScript"], correct: 0 },
    { question: "Which particle is responsible for carrying the force of gravity?", options: ["Photon", "Gluon", "Graviton", "Boson"], correct: 2 },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "H2O", "CaCO3"], correct: 0 },
    { question: "Which river is the longest in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], correct: 1 },
    { question: "Which OS was the first to introduce the concept of virtual memory?", options: ["UNIX", "Multics", "Windows", "Mac OS"], correct: 1 },
    { question: "Who is the current Secretary-General of the United Nations (2024)?", options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Boutros Boutros-Ghali"], correct: 2 },
    { question: "Which sorting algorithm uses the 'divide and conquer' approach?", options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Heap Sort"], correct: 1 },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
    { question: "Who won the Ballon d'Or in 2023?", options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Kylian Mbappé"], correct: 0 },
    { question: "Which ancient civilization is credited with inventing the wheel?", options: ["Egyptians", "Mesopotamians", "Indus Valley", "Chinese"], correct: 1 },
    { question: "What is the smallest continent by land area?", options: ["Antarctica", "Europe", "Australia", "South America"], correct: 2 },
    { question: "Which algorithm is used to solve the 'Minimum Spanning Tree' problem?", options: ["Kruskal's", "Dijkstra's", "Bellman-Ford", "Prim's"], correct: 0 },
    { question: "What is the most electronegative element in the periodic table?", options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"], correct: 1 },
    { question: "Who composed the famous symphony 'Ode to Joy'?", options: ["Mozart", "Beethoven", "Bach", "Tchaikovsky"], correct: 1 },
    { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
    { question: "Which Indian state has the longest coastline?", options: ["Gujarat", "Maharashtra", "Andhra Pradesh", "Tamil Nadu"], correct: 0 },
    { question: "What is the angle between the hands of a clock at 3:15?", options: ["7.5°", "22.5°", "30°", "37.5°"], correct: 0 },
    { question: "What is the main function of the ALU in a CPU?", options: ["Store data", "Perform calculations", "Control operations", "Manage memory"], correct: 1 },
    { question: "Who is known as the 'Father of Geometry'?", options: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"], correct: 0 },
    { question: "Which Indian city is known as the 'Silicon Valley of India'?", options: ["Hyderabad", "Bengaluru", "Pune", "Chennai"], correct: 1 },
    { question: "Which material is used in solar panels to absorb sunlight?", options: ["Silicon", "Copper", "Graphite", "Nickel"], correct: 0 },
    { question: "Which Indian state is the largest producer of wheat?", options: ["Punjab", "Haryana", "Madhya Pradesh", "Uttar Pradesh"], correct: 3 },
    { question: "Who painted the famous artwork 'The Starry Night'?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], correct: 1 },
    { question: "What is the maximum value of a 32-bit signed integer?", options: ["2^32 - 1", "2^31 - 1", "2^31", "2^32"], correct: 1 },
    { question: "Who is the inventor of the World Wide Web?", options: ["Tim Berners-Lee", "Vint Cerf", "Alan Turing", "Marc Andreessen"], correct: 0 },
    { question: "Which Indian state has the highest literacy rate?", options: ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Goa"], correct: 0 },
    { question: "Which element is named after a planet?", options: ["Plutonium", "Uranium", "Neptunium", "Mercury"], correct: 1 },
    { question: "What is the complexity of searching for an element in a balanced binary search tree?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correct: 1 },
    { question: "Who was the first female Prime Minister of the UK?", options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Jacinda Ardern"], correct: 0 },
    { question: "Which Indian scientist developed the concept of a space elevator?", options: ["C. V. Raman", "Satish Dhawan", "Arun Misra", "Narinder Singh Kapany"], correct: 2 },
    { question: "What is the SI unit of luminous intensity?", options: ["Candela", "Lumen", "Lux", "Joule"], correct: 0 },
    { question: "Which database model uses tables to store data?", options: ["Hierarchical", "Relational", "Object-Oriented", "Network"], correct: 1 },
    { question: "What is the name of the rover sent by NASA to study Mars in 2021?", options: ["Curiosity", "Perseverance", "Opportunity", "Spirit"], correct: 1 },
    { question: "What is the primary ingredient in steel?", options: ["Carbon", "Iron", "Aluminum", "Copper"], correct: 1 },
    { question: "Which programming paradigm emphasizes functions over objects?", options: ["Functional", "Object-Oriented", "Procedural", "Imperative"], correct: 0 },
    { question: "Who wrote the book 'A Brief History of Time'?", options: ["Carl Sagan", "Stephen Hawking", "Neil deGrasse Tyson", "Richard Feynman"], correct: 1 },
    { question: "Which country has the largest forest area?", options: ["Brazil", "Canada", "Russia", "United States"], correct: 2 },
    { question: "Which football team won the FIFA World Cup in 2018?", options: ["Germany", "Argentina", "France", "Croatia"], correct: 2 },
    { question: "What is the term for the time taken for a planet to complete one orbit around the Sun?", options: ["Rotation", "Revolution", "Orbiting", "Perihelion"], correct: 1 },
    { question: "What is the main component of a computer's motherboard?", options: ["CPU", "RAM", "PCB", "GPU"], correct: 2 },
    { question: "What is the term for data organized in rows and columns?", options: ["File", "Database", "Table", "Record"], correct: 2 },
    { question: "Which part of the electromagnetic spectrum has the highest frequency?", options: ["Gamma rays", "X-rays", "Ultraviolet", "Microwaves"], correct: 0 },
    { question: "Which Indian mathematician made contributions to the number theory?", options: ["Aryabhata", "Srinivasa Ramanujan", "C. R. Rao", "Brahmagupta"], correct: 1 },
    { question: "Which player is known as the 'Master Blaster' of cricket?", options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "MS Dhoni"], correct: 2 },    { question: "Who coined the term 'Artificial Intelligence'?", options: ["John McCarthy", "Alan Turing", "Marvin Minsky", "Herbert Simon"], correct: 0 },
    { question: "What is the name of India's first nuclear reactor?", options: ["Cirus", "Dhruva", "Apsara", "KAMINI"], correct: 2 },
    { question: "Which protocol is used for secure communication over a network?", options: ["HTTP", "FTP", "SSL/TLS", "SMTP"], correct: 2 },
    { question: "What is the chemical formula for ozone?", options: ["O", "O2", "O3", "H2O"], correct: 2 },
    { question: "Which chess player holds the record for the longest reign as World Chess Champion?", options: ["Bobby Fischer", "Magnus Carlsen", "Garry Kasparov", "Anatoly Karpov"], correct: 2 },
    { question: "Which programming language is primarily used for Android app development?", options: ["Java", "Swift", "Kotlin", "C++"], correct: 2 },
    { question: "Which Indian mountain peak is the highest?", options: ["Kanchenjunga", "Nanda Devi", "K2", "Anamudi"], correct: 0 },
    { question: "What does GPU stand for in computing?", options: ["Graphics Processing Unit", "General Processing Unit", "Graphics Protocol Unit", "Generalized Program Unit"], correct: 0 },
    { question: "Which African country has the largest population?", options: ["South Africa", "Egypt", "Nigeria", "Ethiopia"], correct: 2 },
    { question: "What is the Fibonacci sequence's first non-zero term?", options: ["0", "1", "2", "3"], correct: 1 },
    { question: "Which is the longest river in Asia?", options: ["Yangtze", "Yellow River", "Ganges", "Mekong"], correct: 0 },
    { question: "Which Indian space mission attempted to land on the Moon's south pole in 2019?", options: ["Chandrayaan-1", "Chandrayaan-2", "Mangalyaan", "Aditya L1"], correct: 1 },
    { question: "Who won the Nobel Prize in Physics in 1921?", options: ["Niels Bohr", "Albert Einstein", "Marie Curie", "Max Planck"], correct: 1 },
    { question: "What is the smallest unit of data in a computer?", options: ["Bit", "Byte", "Kilobyte", "Megabyte"], correct: 0 },
    { question: "Who was the first Indian to win an Oscar?", options: ["Bhanu Athaiya", "AR Rahman", "Satyajit Ray", "Gulzar"], correct: 0 },
    { question: "Which Indian city is also known as the 'City of Lakes'?", options: ["Udaipur", "Bhopal", "Jaipur", "Nainital"], correct: 0 },
    { question: "What does DNS stand for?", options: ["Domain Name Server", "Domain Name System", "Data Network System", "Domain Numbering Service"], correct: 1 },
    { question: "Which planet in our solar system has the highest density?", options: ["Earth", "Jupiter", "Saturn", "Mars"], correct: 0 },
    { question: "Which mathematician formulated the laws of planetary motion?", options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Copernicus"], correct: 1 },
    { question: "What is the national game of Canada?", options: ["Hockey", "Baseball", "Lacrosse", "Cricket"], correct: 2 },
    { question: "Which programming language is known as the 'language of AI'?", options: ["Prolog", "Lisp", "Python", "Haskell"], correct: 1 },
    { question: "What is the Turing Award often called?", options: ["The Nobel Prize of Computer Science", "The Fields Medal of Programming", "The Pulitzers of Technology", "The Grammy of Coding"], correct: 0 },
    { question: "Which cryptographic method ensures data integrity?", options: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Digital Signature"], correct: 2 },
    { question: "What is the derivative of e^(x^2) with respect to x?", options: ["e^(x^2) * x", "e^(x^2) * 2x", "2e^(x^2)", "x^2 * e^x"], correct: 1 },
    { question: "Who designed the Analytical Engine, a precursor to the modern computer?", options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "John von Neumann"], correct: 0 },
    { question: "Which was the first spacecraft to land on Venus?", options: ["Venera 7", "Mariner 2", "Pioneer Venus", "Venera 4"], correct: 0 },
    { question: "What is the time complexity of the Bellman-Ford algorithm?", options: ["O(V + E)", "O(V^2)", "O(VE)", "O(E log V)"], correct: 2 },
    { question: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], correct: 1 },
    { question: "What is the fourth state of matter?", options: ["Plasma", "Bose-Einstein Condensate", "Superfluid", "Solid"], correct: 0 },
    { question: "Which Nobel Laureate proposed the idea of a wormhole?", options: ["Albert Einstein", "Nathan Rosen", "Kip Thorne", "Stephen Hawking"], correct: 1 },
    { question: "Which Indian city is home to the world's largest cricket stadium by capacity?", options: ["Mumbai", "Ahmedabad", "Kolkata", "Bengaluru"], correct: 1 },
    { question: "Which sorting algorithm is NOT stable?", options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"], correct: 1 },
    { question: "What is the entropy of a perfectly ordered system?", options: ["Zero", "One", "Infinite", "Negative"], correct: 0 },
    { question: "Which was the first Indian satellite to orbit the Moon?", options: ["Chandrayaan-1", "Mangalyaan", "Rohini", "Aryabhata"], correct: 0 },
    { question: "What is the smallest positive integer that is both prime and even?", options: ["0", "1", "2", "3"], correct: 2 },
    { question: "Which is the only mammal capable of true flight?", options: ["Bat", "Flying Squirrel", "Sugar Glider", "Colugo"], correct: 0 },
    { question: "Which data structure is used in the implementation of a recursive function?", options: ["Queue", "Stack", "Array", "Graph"], correct: 1 },
    { question: "What is the term for the smallest structural unit of a crystal?", options: ["Unit Cell", "Grain", "Lattice", "Polymer"], correct: 0 },
    { question: "Who proposed the theory of black holes evaporating over time?", options: ["Albert Einstein", "Stephen Hawking", "Subrahmanyan Chandrasekhar", "Roger Penrose"], correct: 1 },
    { question: "Which battle marked the beginning of Mughal rule in India?", options: ["Battle of Plassey", "Battle of Panipat", "Battle of Haldighati", "Battle of Khanwa"], correct: 1 },
    { question: "Which Indian mathematician's work was crucial for string theory?", options: ["Srinivasa Ramanujan", "C. R. Rao", "Satyendra Nath Bose", "Harish-Chandra"], correct: 3 },
    { question: "What is the highest level of abstraction in cloud computing?", options: ["IaaS", "PaaS", "SaaS", "DaaS"], correct: 2 },
    { question: "Which physicist first proposed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Max Planck", "Galileo Galilei"], correct: 1 },
    { question: "What is the largest prime number known to date (as of 2025)?", options: ["Mersenne Prime", "Fermat Prime", "Proth Prime", "Cunningham Prime"], correct: 0 },
    { question: "Which programming technique is used to handle real-time scenarios?", options: ["Batch Processing", "Real-Time Processing", "Concurrent Processing", "Distributed Processing"], correct: 1 },
    { question: "Which is the world's largest active volcano?", options: ["Mauna Loa", "Mount Etna", "Mount Vesuvius", "Mount St. Helens"], correct: 0 },
    { question: "Who solved Fermat's Last Theorem?", options: ["Andrew Wiles", "Leonhard Euler", "Carl Friedrich Gauss", "Pierre-Simon Laplace"], correct: 0 },
    { question: "What is the Big O complexity of Dijkstra's algorithm with a Fibonacci heap?", options: ["O(E log V)", "O(V^2)", "O(V log V + E)", "O(E + V log V)"], correct: 3 },
    { question: "Which Indian scientist contributed to the Chandrasekhar Limit?", options: ["C. V. Raman", "Satyendra Nath Bose", "Subrahmanyan Chandrasekhar", "Vikram Sarabhai"], correct: 2 },
    { question: "What is the main component of the Earth's inner core?", options: ["Iron", "Nickel", "Silicon", "Carbon"], correct: 0 },
    { question: "Which programming language is used in TensorFlow?", options: ["C++", "Python", "JavaScript", "Java"], correct: 1 },
    { question: "Who was the first Indian to win the Fields Medal?", options: ["Manjul Bhargava", "S. R. Srinivasa Varadhan", "Ashoke Sen", "Harish-Chandra"], correct: 0 },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correct: 1 },
    { question: "Which spacecraft made the first successful flyby of Pluto?", options: ["New Horizons", "Voyager 1", "Cassini", "Pioneer 10"], correct: 0 },
    { question: "Which country's constitution is the longest in the world?", options: ["India", "United States", "United Kingdom", "Australia"], correct: 0 },
    { question: "What is the smallest number divisible by all integers from 1 to 10?", options: ["5040", "2520", "10080", "1260"], correct: 1 },
    { question: "What is the name of the effect where a photon interacts with an electron?", options: ["Compton Effect", "Photoelectric Effect", "Zeeman Effect", "Cherenkov Radiation"], correct: 0 },
    { question: "Which is the largest organ in the human body?", options: ["Heart", "Skin", "Liver", "Brain"], correct: 1 },
    { question: "Which machine learning algorithm is best for unsupervised learning?", options: ["K-Means", "Decision Tree", "Random Forest", "Gradient Boosting"], correct: 0 },
    { question: "Who wrote the 'Principia Mathematica'?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"], correct: 0 }
    // Add more questions...
];

var flag=0;


const moneyLevels = [
    "₹7 Crore", "₹1 Crore", "₹50,00,000", "₹25,00,000", "₹12,50,000", "₹6,40,000",
    "₹3,20,000", "₹1,60,000", "₹80,000", "₹40,000", "₹20,000", "₹10,000",
    "₹5,000", "₹3,000", "₹2,000", "₹1,000"
].reverse();

let currentLevel = 0;
let currentQuestionData = null;
let timerInterval;
const guaranteedLevels = ["₹3,20,000", "₹10,000", "₹0"];
const timerElement = document.getElementById("timer");
const moneyTree = document.getElementById("money-tree");
const lifelines = { fiftyFifty: false, expert: false, audiencePoll: false, flipQuestion: false };

// Populate Money Tree
moneyLevels.forEach((level, index) => {
    const li = document.createElement("li");
    li.textContent = level;
    li.id = `level-${index}`;
    if (guaranteedLevels.includes(level)) li.classList.add("guaranteed");
    moneyTree.appendChild(li);
});

function loadQuestion() {
    if (currentLevel >= moneyLevels.length) {
        redirectToPage("win.html", `Congratulations! You won ₹7 Crore!`);
        return;
    }
    startTimer();
    updateMoneyTree();
    currentQuestionData = questions[(Math.floor(Math.random() * 20)) + (20*currentLevel)];
    document.getElementById("question").textContent = currentQuestionData.question;
    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach((btn, idx) => {
        btn.textContent = currentQuestionData.options[idx];
        btn.disabled = false;
        btn.style.backgroundColor = "";
        btn.onclick = () => checkAnswer(idx, currentQuestionData.correct);
    });
}

function startTimer() {
    let timeLeft = 30;
    if(currentLevel > 4)
        timeLeft=60;
    else if(currentLevel > 9)
        timeLeft=120;
    clearInterval(timerInterval);
    timerElement.textContent = `${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOver();
        }
    }, 1000);
}

function handleTimeOver() {
    alert("Time's up!");
    moveToGuaranteedLevel(currentLevel);
}

function checkAnswer(selected, correct) {
    clearInterval(timerInterval);
    if (selected === correct) {
        currentLevel++;
        loadQuestion();
    } else {
        moveToGuaranteedLevel(currentLevel);
    }
}

function moveToGuaranteedLevel(currentLevel) {
    if(currentLevel >= 4 && currentLevel < 9)
    {
        redirectToPage("lose.html", `Congratulations ! You won ${guaranteedLevels[1]}!`);
    }
    else if(currentLevel <= 4)
    {
        redirectToPage("lose.html", `Sorry !! You won nada!`);
    }
    else{
        redirectToPage("lose.html", `You won ${guaranteedLevels[0]}!`);
    }
    // for (let i = guaranteedLevels.length - 1; i >= 0; i--) {
    //     const levelIndex = moneyLevels.indexOf(guaranteedLevels[i]);
    //     if (currentLevel >= levelIndex) {
    //         redirectToPage("lose.html", `You won ${guaranteedLevels[i]}!`);
    //         return;
    //     }
    // }
}

function markLifelineUsed(id) {
    const button = document.getElementById(id);
    button.style.backgroundColor = "red";
    button.disabled = true;
}

// Lifeline: 50:50
document.getElementById("fifty-fifty").onclick = function () {
    if (!lifelines.fiftyFifty) {
        lifelines.fiftyFifty = true;
        markLifelineUsed("fifty-fifty");

        const optionButtons = document.querySelectorAll(".option");
        const correctIdx = currentQuestionData.correct;
        let disabledCount = 0;

        optionButtons.forEach((btn, idx) => {
            if (idx !== correctIdx && disabledCount < 2) {
                btn.textContent = "";
                btn.disabled = true;
                disabledCount++;
            }
        });
    }
};

// Lifeline: Flip Question
document.getElementById("flip-question").onclick = function () {
    if (!lifelines.flipQuestion) {
        lifelines.flipQuestion = true;
        markLifelineUsed("flip-question");

        currentQuestionData = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById("question").textContent = currentQuestionData.question;
        const optionButtons = document.querySelectorAll(".option");

        optionButtons.forEach((btn, idx) => {
            btn.textContent = currentQuestionData.options[idx];
            btn.disabled = false;
            btn.onclick = () => checkAnswer(idx, currentQuestionData.correct);
        });
    }
};

// Lifeline: Audience Poll

document.getElementById("google").onclick = function ()
{
    if (!lifelines.audiencePoll) {
        lifelines.audiencePoll = true;
        markLifelineUsed("google");
        alert(`Audience suggests: Option ${(currentQuestionData.correct + 1)} may be correct`);
    }
};

// Lifeline: Ask the Expert
document.getElementById("two-option").onclick = function () {
    if (!lifelines.expert) {
        lifelines.expert = true;
        markLifelineUsed("two-option");
        alert(`Expert suggests: Option ${(currentQuestionData.correct + 1)}`);
    }
};

// Abort Option
const abortButton = document.createElement("button");
abortButton.textContent = "Abort";
abortButton.className = "lifeline";
abortButton.onclick = function () {
    redirectToPage("abort.html", `You won ₹${moneyLevels[currentLevel-1]} by aborting.`);
};
document.querySelector(".lifelines").appendChild(abortButton);

function updateMoneyTree() {
    document.querySelectorAll("#money-tree li").forEach((li, idx) => {
        li.classList.remove("active");
        if (idx === currentLevel) li.classList.add("active");
    });
}

function redirectToPage(page, message) {
    localStorage.setItem("finalMessage", message);
    window.location.href = page;
}

// Restore state when returning from Audience Poll
if (localStorage.getItem("currentLevel")) {
    currentLevel = parseInt(localStorage.getItem("currentLevel"), 10);
    currentQuestionData = JSON.parse(localStorage.getItem("currentQuestionData"));
    localStorage.removeItem("currentLevel");
    localStorage.removeItem("currentQuestionData");
}

if(flag===0)
loadQuestion();
