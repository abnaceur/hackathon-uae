<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!--for AdminLTe -->
        <link href="{{asset('/bower_components/bootstrap/dist/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">

        <!-- Font Awesome -->
        <link href="{{asset('/bower_components/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">


        <!-- Ionicons -->
        <link href="{{asset('/bower_components/Ionicons/css/ionicons.min.css')}}" rel="stylesheet" type="text/css">

        <!-- Theme style -->
        <link href="{{asset('/bower_components/admin-lte/dist/css/AdminLTE.min.css')}}" rel="stylesheet" type="text/css">

        <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
              page. However, you can choose any other skin. Make sure you
              apply the skin class to the body tag so the changes take effect. -->
        <link href="{{asset('/bower_components/admin-lte/dist/css/skins/skin-blue.min.css')}}" rel="stylesheet" type="text/css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <!-- Google Font -->
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="{{asset('js/jquery-textrange.js')}}" ></script>
        <script src="{{asset('js/Chart.min.js')}}" ></script>

    </head>
    <body class="hold-transition skin-blue sidebar-mini">
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    @endauth
                </div>
            @endif

            <div class="content">
                <div id="root"></div>
        </div>
                <script src="{{asset('js/scripts.js')}}"></script>
                <script src="{{asset('js/bundle.js')}}" ></script>

                <!-- REQUIRED JS SCRIPTS -->

                <!-- jQuery 3 -->
                <script src="{{asset('/bower_components/jquery/dist/jquery.min.js')}}" ></script>

                <!-- Bootstrap 3.3.7 -->
                <script src="{{asset('/bower_components/bootstrap/dist/js/bootstrap.min.js')}}" ></script>

                <!-- AdminLTE App -->
                <script src="{{asset('/bower_components/admin-lte/dist/js/adminlte.min.js')}}" ></script>

                <!-- Optionally, you can add Slimscroll and FastClick plugins.
                     Both of these plugins are recommended to enhance the
                     user experience. -->
    </body>
</html>
