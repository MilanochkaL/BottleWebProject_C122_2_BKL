<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}  &nbsp;</title>
    <link rel="stylesheet" type="text/css" href="/static/content/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/static/content/site.css" />
    <link rel="shortcut icon" href="static\images\icon.png" type="image/x-icon">
    <link rel="preload" href="static/fonts/ofont.ru_Kreadon.ttf" as="font">
    <script src="/static/scripts/modernizr-2.6.2.js"></script>
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
        <li><a href="/home"><img href="/" class="navbar-brand" src="static\images\icon.png" width="7%" height="7%" left=0></a></li>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/contact">О нас</a></li>
                    <li><a href="/subgraph">Подграф</a></li>
                    <li><a href="/find_nodes">Поиск вершин</a></li>
                    <li><a href="/Euler_cycle">Поиск Эйлерова цикла</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container body-content">
        {{!base}}
        <hr />
        <footer>
            <p class="text_fotter">&copy; {{ year }} - Team BKL</p>
        </footer>
    </div>

    <script src="/static/scripts/jquery-1.10.2.js"></script>
    <script src="/static/scripts/bootstrap.js"></script>
    <script src="/static/scripts/respond.js"></script>

</body>
</html>
