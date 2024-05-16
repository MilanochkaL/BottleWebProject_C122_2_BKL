% rebase('layout.tpl', title="Об авторах", year=year)

<style>


.authors-heading {
    margin-top: 70px;
    text-align: center;
    width: 100%;
    font-weight: bold;
}

.profiles {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    display:flex;
    flex-direction:column;
}

.profile-card {
    width: 900px;
    min-height: 250px;
    background-color: #d7f6fc;
    padding: 20px;
    font-family: Arial, sans-serif;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 30px;
    display: flex;
    margin-bottom: 20px;
}
    .profile-card:nth-child(2) {
        background-color: #c5cdfb;
    }
    .profile-card:nth-child(3) {
        background-color: #d7f6fc;
    }

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}


.profile-info {
    margin-left: 80px;
    width: 500px;
    text-align:left;
    font-size: 17px;
    border-right: 3px  #32a1ce groove;
}

    .profile-info h2 {
        margin-left: 0;
        font-size: 24px;
        font-weight: bold;
    }

    .profile-info p {
        margin: 5px 0;
        text-align: left;
    }

.contact-info {
    margin-top: 20px;
}

    .contact-info p,
    .contact-info a {
        margin: 5px 0;
        text-decoration: none;
        font-weight: bold;
        text-align: left;
    }

.phone-icon,
.email-icon {
    margin-right: 5px;
}

.support {
    color: #888;
    text-align: center;
    width: 100%;
}
</style>

<body>

     <h1 class="authors-heading" >НАША КОМАНДА</h1>

    <div class="profiles">
        <div class="profile-card">
            <img src="/static/images/authors/sasha.jpg" alt="Profile Picture" class="profile-pic">
            <div class="profile-info">
                <h2>Белошицкая Александра Валерьевна</h2>
                <p><strong>Роль в команде:</strong> 1 вариант</p>
                <p><strong>Работа над методом:</strong> поиск подграфа в графе</p>
                <p><strong>Допонительно:</strong> Мы не умерли</p>
            </div>
            <div class="contact-info">
                <p><i class="phone-icon"></i>+7 (888) 777-66-55</p>
                <a href="sasssha@gmail.com"><i class="email-icon"></i>sasssha@gmail.com</a>
            </div>
        </div>

        <div class="profile-card">
            <img src="/static/images/authors/nadezhda.jpg" alt="Profile Picture" class="profile-pic">
            <div class="profile-info">
                <h2>Кузнецова Надежда Владимировна</h2>
                <p><strong>Роль в команде:</strong> 2 вариант</p>
                <p><strong>Работа над методом:</strong> поиск вершин в графе</p>
                <p><strong>Допонительно:</strong> Мы не умерли</p>
            </div>
            <div class="contact-info">
                <p><i class="phone-icon"></i>+7 (888) 777-66-55</p>
                <a href="nadyaaa@gmail.com"><i class="email-icon"></i>nadyaaaa@gmail.com</a>
            </div>
        </div>

        <div class="profile-card">
            <img src="/static/images/authors/milanochka.jpg" alt="Profile Picture" class="profile-pic">
            <div class="profile-info">
                <h2>Локтева Милана Александровна</h2>
                <p><strong>Роль в команде:</strong> 3 вариант</p>
                <p><strong>Работа над методом:</strong>поиск Эйлерова цикла в графе</p>
                <p><strong>Допонительно:</strong> Мы не умерли</p>
            </div>
            <div class="contact-info">
                <p><i class="phone-icon"></i>+7 (888) 777-66-55</p>
                <a href="milllanaaaa@gmail.com"><i class="email-icon"></i>milllanaaaa@gmail.com</a>
            </div>
        </div>
    </div>

    <h3 class="support">Поддержать авторов: 2200 7010 6438 8397 (Тинькофф)</h3>

</body>