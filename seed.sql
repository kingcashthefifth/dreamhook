INSERT INTO users (firstname, lastname, username, password, email) VALUES
('Cash', 'Teo', 'kingcashthefifth', 'testing', 'kingcashthefifth@gmail.com'),
('Teng', 'Teng', 'tengtengteng', 'testing2', 'tengisthebest@gmail.com');

INSERT INTO threadtitle (title, author_id, authorcontent)
VALUES
('I want to be a coder, am I too late for that?', 1, 'I''m currently 28 years old, my field of study is not even close to coding. I''m currently working as a sales executive in marketing company. I feel like i''m doing greate that the online coding tutorials and really wanted to change my career. Can anybody adivse me how should I proceed?'),
('I am a lawyer, I have always wanted to be a pilot, is it possible?', 2, 'I understand that this is a very deep and professional field I am talking about, but to the pilots out there, is it even remotely possible and if so, any advise? Really appreciate your input in advance!'),
('My dream: drawing paintings for a living. Currently: admin in an office.', 1, 'I have looked into options of how I should proceed, actually I wanna know how is the job market for artists in Singapore :('),
('I''m a student, I feel like I''m great at games, feel like trying out for being a pro E-sports player, any advise?', 2, 'Before I start, I know I might be flamed by you guys to "GET A PROPER JOB KID!" "COME BACK TO REALITY BOY!" But I really want to know more about E-sports if there are any pro that can advise me, thank you so much!');

INSERT INTO threadcomments (comments, author_id, thread_id)
VALUES
('Well, I feel you can do anything you want, it''s your life man~', 2, 1);
