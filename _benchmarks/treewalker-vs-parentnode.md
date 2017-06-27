---
title: TreeWalker vs parentNode
setup: |
  <div style='display:none;' id="root">
  	<div data-js-module="myModule1-level1">
  		<div>
  			<div data-js-module="myModule1-level3">
  				<h4><a><strong>CategorÃ­as</strong> Windows</a></h4>
  				<div>
  					<ul>
  						<li>
  						<strong><a>ComunicaciÃ³n</a></strong>
  						<ul  data-js-module="myModule1-level6">
  							<li><a> Correo electrÃ³nico</a></li>
  							<li><a> MensajerÃ­a instantÃ¡nea</a></li>
  							<li><a> TelefonÃ­a (VoIP y PC a...</a></li>
  							<li><a> CÃ¡maras web</a></li>
  							<li><a> IRC (Internet Relay Chat)</a></li>
  							<li><a> Otros programas de com...</a></li>
  							<li><a> Redes sociales</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul  data-js-module="myModule1-level5">
  						<li>
  						<strong><a>Navegadores</a></strong>
  						<ul>
  							<li><a> Navegadores web</a></li>
  							<li><a> Extensiones Firefox</a></li>
  							<li><a> Extensiones Chrome</a></li>
  							<li><a> Mejoras Internet Explorer</a></li>
  							<li><a> Gestores de Favoritos</a></li>
  							<li><a> Multibuscadores</a></li>
  							<li><a> Gestores cachÃ© y cookies</a></li>
  							<li><a> Mejoras Opera</a></li>
  							<li><a> PÃ¡gina de inicio</a></li>
  							<li><a> Reproductores para nav...</a></li>
  							<li><a> Otros navegadores</a></li>
  							<li><a> Optimizadores de naveg...</a></li>
  							<li><a>MÃ¡s</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Descargas de archivos</a></strong>
  						<ul>
  							<li><a> Intercambio de archivo...</a></li>
  							<li><a> Almacenamiento remoto</a></li>
  							<li><a> Gestores de descargas</a></li>
  							<li><a> Descargas YouTube</a></li>
  							<li><a> FTP</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Utilidades</a></strong>
  						<ul>
  							<li><a> AnÃ¡lisis y optimizaciÃ³n</a></li>
  							<li><a> Compresores</a></li>
  							<li><a> CD/DVD</a></li>
  							<li><a> Mantenimiento del PC</a></li>
  							<li><a> Utilidades de archivos</a></li>
  							<li><a> Discos duros</a></li>
  							<li><a> Sistemas operativos</a></li>
  							<li><a> Hardware y controladores</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Juegos para PC</a></strong>
  						<ul>
  							<li><a> Juegos de acciÃ³n</a></li>
  							<li><a> Juegos de deportes</a></li>
  							<li><a> Juegos de motor</a></li>
  							<li><a> Emuladores de juegos</a></li>
  							<li><a> Utilidades para juegos</a></li>
  							<li><a> Juegos de estrategia</a></li>
  							<li><a> Juegos de rol</a></li>
  							<li><a> Casual games</a></li>
  							<li><a> Juegos de plataformas</a></li>
  							<li><a> Puzles</a></li>
  							<li><a> Juegos clÃ¡sicos</a></li>
  							<li><a> Mods para juegos</a></li>
  							<li><a>MÃ¡s</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Imagen</a></strong>
  						<ul>
  							<li><a> Retoque y optimizaciÃ³n...</a></li>
  							<li><a> Visualizadores y catal...</a></li>
  							<li><a> Editores grÃ¡ficos</a></li>
  							<li><a> Presentaciones y demos...</a></li>
  							<li><a> DiseÃ±o 3D</a></li>
  							<li><a> Utilidades varias de i...</a></li>
  							<li><a> Crear animaciones</a></li>
  							<li><a> DiseÃ±o de pÃ¡ginas Web</a></li>
  							<li><a> Capturadores de pantalla</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Audio</a></strong>
  						<ul>
  							<li><a> Reproductores de audio</a></li>
  							<li><a> Conversores de audio</a></li>
  							<li><a> Editores de audio</a></li>
  							<li><a> Programas para DJ</a></li>
  							<li><a> ExtracciÃ³n CD-DA</a></li>
  							<li><a> MÃºsica en streaming</a></li>
  							<li><a> GrabaciÃ³n de audio</a></li>
  							<li><a> Administradores de arc...</a></li>
  							<li><a> Otros programas de audio</a></li>
  							<li><a> Reconocimiento de canc...</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>VÃ­deo</a></strong>
  						<ul>
  							<li><a> Codecs de vÃ­deo</a></li>
  							<li><a> Utilidades para pelÃ­cu...</a></li>
  							<li><a> Editores de vÃ­deo</a></li>
  							<li><a> Reproductores de vÃ­deo</a></li>
  							<li><a> Conversores de vÃ­deo</a></li>
  							<li><a> Otros programas de vÃ­deo</a></li>
  							<li><a> Capturadores y sintoni...</a></li>
  							<li><a> Unir y cortar vÃ­deos</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Seguridad</a></strong>
  						<ul>
  							<li><a> Antivirus</a></li>
  							<li><a> AntiespÃ­as</a></li>
  							<li><a> Cifrado</a></li>
  							<li><a> Cortafuegos</a></li>
  							<li><a> ContraseÃ±as</a></li>
  							<li><a> Bloqueo y restricciÃ³n</a></li>
  							<li><a> Borrado seguro de arch...</a></li>
  							<li><a> RecuperaciÃ³n de archivos</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Personaliza tu PC</a></strong>
  						<ul>
  							<li><a> Fondos de Escritorio</a></li>
  							<li><a> Pieles (Skins)</a></li>
  							<li><a> Fuentes</a></li>
  							<li><a> Salvapantallas</a></li>
  							<li><a> Iconos</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Productividad y Negocios</a></strong>
  						<ul>
  							<li><a> Finanzas</a></li>
  							<li><a> OfimÃ¡tica</a></li>
  							<li><a> Negocios Verticales</a></li>
  							<li><a> Marketing/Ventas</a></li>
  							<li><a> AdministraciÃ³n/Secreta...</a></li>
  							<li><a> Proyectos y organizadores</a></li>
  							<li><a> Recursos Humanos</a></li>
  							<li><a> LogÃ­stica</a></li>
  							<li><a> Otros</a></li>
  							<li><a> Agendas y diarios</a></li>
  							<li><a> Notas y recordatorios</a></li>
  							<li><a> Base de datos y catÃ¡logos</a></li>
  							<li><a>MÃ¡s</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>TV y Radio online</a></strong>
  						<ul>
  							<li><a> Radio online</a></li>
  							<li><a> TelevisiÃ³n online</a></li>
  							<li><a> Noticias</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Hogar y Ocio</a></strong>
  						<ul>
  							<li data-js-module="myModule1-level7"><a> Utilidades para deportes</a></li>
  							<li data-js-module="myModule2-level7"><a> Bromas y cosas divertidas</a></li>
  							<li><a> GuÃ­as y planificaciÃ³n ...</a></li>
  							<li><a> Recetarios y libros de...</a></li>
  							<li><a> LoterÃ­a y Quinielas</a></li>
  							<li><a> Utilidades para la salud</a></li>
  							<li><a> Crear Ã¡rboles genealÃ³g...</a></li>
  							<li><a> CumpleaÃ±os y aniversarios</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>EducaciÃ³n y Ciencia</a></strong>
  						<ul>
  							<li><a> MecanografÃ­a</a></li>
  							<li><a> Ordenadores</a></li>
  							<li><a> MatemÃ¡ticas y estadÃ­stica</a></li>
  							<li><a> IngenierÃ­a y arquitectura</a></li>
  							<li><a> Calculadoras y convers...</a></li>
  							<li><a> Ciencias naturales</a></li>
  							<li><a> Idiomas y diccionarios</a></li>
  							<li><a> Literatura y referencias</a></li>
  							<li><a> MÃºsica e instrumentos</a></li>
  							<li><a> Ayudas para el estudio</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>Redes - conexiÃ³n</a></strong>
  						<ul>
  							<li><a> Gestores de conexiÃ³n</a></li>
  							<li><a> Redes inalÃ¡mbricas (WiFi)</a></li>
  							<li><a> Control y acceso remot...</a></li>
  							<li><a> Otras utilidades de red</a></li>
  							<li><a> OptimizaciÃ³n y acelera...</a></li>
  							<li><a> Control del trÃ¡fico de...</a></li>
  							<li><a> AnÃ¡lisis y administraciÃ³n</a></li>
  						</ul>
  						</li>
  					</ul>
  					<ul>
  						<li>
  						<strong><a>ProgramaciÃ³n</a></strong>
  						<ul>
  							<li><a> Bases de datos</a></li>
  							<li><a> CreaciÃ³n de instaladores</a></li>
  							<li><a> Editores de programaciÃ³n</a></li>
  							<li><a> Tutoriales y Manuales ...</a></li>
  							<li><a> ProgramaciÃ³n en Java</a></li>
  							<li><a> ProgramaciÃ³n ActiveX</a></li>
  							<li><a> ProgramaciÃ³n en C y C++</a></li>
  							<li><a> ProgramaciÃ³n en Visual...</a></li>
  							<li><a> ProgramaciÃ³n web</a></li>
  							<li><a> Lenguajes educativos</a></li>
  							<li><a> Utilidades para webmas...</a></li>
  						</ul>
  						</li>
  					</ul>
  				</div>
  			</div>
  			<div>
  				<h4>Softonic <strong>Newsletter</strong></h4>
  				<form action="http://www.softonic.com/" method="post">
  					<input>
  					<input>
  					<input>
  					<fieldset>
  						<legend>Softonic Newsletter</legend>
  						<ul>
  							<li>
  							<label>SuscrÃ­bete con tu email:</label>
  							<input>
  							</li>
  							<li>
  							<input>
  							<label>All About Software</label>
  							<a>Lo mejor en noticias. </a>
  							</li>
  							<li>
  							<input>
  							<label>Ofertas Softonic</label>
  							<a>Ofertas exclusivas.</a>
  							</li>
  							<li>
  							<button>
  							SuscrÃ­bete <i></i>
  							</button>
  							</li>
  						</ul>
  						<p>
  							Valoramos tu <a>privacidad</a>.
  						</p>
  					</fieldset>
  				</form>
  			</div>
  			<div>
  				<h4>Top <em>bÃºsquedas</em></h4>
  				<p>
  					Lo mÃ¡s buscado por nuestros usuarios
  				</p>
  				<div>
  					<h1><a>descargar juegos gratis</a></h1>
  					<span>/</span>
  					<h1><a>ares</a></h1>
  					<span>/</span>
  					<h2><a>descargar juegos gratis niÃ±as</a></h2>
  					<span>/</span>
  					<h2><a>antivirus gratis</a></h2>
  					<span>/</span>
  					<h2><a>descargar play store gratis</a></h2>
  					<span>/</span>
  					<h3><a>facebook</a></h3>
  					<span>/</span>
  					<h3><a>juegos pc</a></h3>
  					<span>/</span>
  					<h3><a>youtube</a></h3>
  					<span>/</span>
  					<strong><a>antivirus</a></strong>
  					<span>/</span>
  					<strong><a>programas gratis</a></strong>
  					<span>/</span>
  					<strong><a>juegos</a></strong>
  					<span>/</span>
  					<strong><a>google</a></strong>
  					<span>/</span>
  					<em><a>minecraft</a></em>
  					<span>/</span>
  					<em><a>musica</a></em>
  					<span>/</span>
  					<em><a>facebook gratis descargar</a></em>
  					<span>/</span>
  					<em><a>skype</a></em>
  					<span>/</span>
  					<em><a>winrar</a></em>
  					<span>/</span>
  					<em><a>avast</a></em>
  					<span>/</span>
  				</div>
  				<ul>
  					<li><a>BÃºsquedas populares</a></li>
  					<li><a>BÃºsquedas recientes</a></li>
  				</ul>
  			</div>
  			<div>
  				<h4>MÃ¡s <strong>popular</strong></h4>
  				<ul>
  					<li><a>Programas Gratis</a></li>
  					<li><a>Gratis en EspaÃ±ol</a></li>
  					<li><a>Juegos gratis</a></li>
  					<li><a>Software Libre</a></li>
  				</ul>
  			</div>
  		</div>
  		<div>
  			<section>
  			<ol>
  				<li>
  				<a>
  				<img alt="AVG AntiVirus Free 2014" src="http://imagenes.es.sftcdn.net/es/scrn/trih/6000/6108/6108.jpg" width="462">
  				</a>
  				<div>
  					<h2>
  					<a>AVG AntiVirus Free 2014</a>
  					</h2>
  					<h1>ProtecciÃ³n completa contra el malware</h1>
  					<a>
  					<strong>Descargar</strong>
  					<i></i>
  					</a>
  				</div>
  				</li>
  				<li>
  				<input>
  				<input>
  				<input>
  				<input>
  				<input>
  				<div>
  					<h2>
  					<a>WinRAR 5</a>
  					</h2>
  					<h1>Nueva versiÃ³n de uno de los mejores compresores de archivos</h1>
  					<a>
  					<strong>Descargar</strong>
  					<i></i>
  					</a>
  				</div>
  				<a></a></li>
  				<li>
  				<input>
  				<input>
  				<input>
  				<input>
  				<input>
  				<div>
  					<h2>
  					<a>War Thunder</a>
  					</h2>
  					<h1>Emocionantes combates aÃ©reos en este simulador multijugador y gratuito </h1>
  					<a>
  					<strong>Descargar</strong>
  					<i></i>
  					</a>
  				</div>
  				<a></a></li>
  				<li>
  				<input>
  				<input>
  				<input>
  				<input>
  				<input>
  				<div>
  					<h2>
  					<a>Fabulous 28.6 (Google Chrome)</a>
  					</h2>
  					<h1>Potente extensiÃ³n para personalizar tu perfil de Facebook</h1>
  					<a>
  					<strong>Descargar</strong>
  					<i></i>
  					</a>
  				</div>
  				<a></a></li>
  			</ol>
  			<nav>
  			<ul>
  				<li>
  				<a></a>
  				</li>
  				<li>
  				<a>1</a>
  				</li>
  				<li>
  				<a>2</a>
  				</li>
  				<li>
  				<a>3</a>
  				</li>
  				<li>
  				<a>4</a>
  				</li>
  				<li>
  				<a></a>
  				</li>
  			</ul>
  			</nav>
  			</section>
  			<div>
  				<div>
  					<h4>
  					Ãšltimos <em>programas publicados</em></h4>
  					<div>
  						<ul>
  							<li>
  							<a>Mejores programas</a>
  							</li>
  							<li><a>Novedades</a></li>
  							<li><a>Nuevas versiones</a></li>
  						</ul>
  					</div>
  				</div>
  				<span>Softonic - MÃ¡s nuevas</span>
  				<span>1440</span>
  				<ul>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>De prueba</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Compresores
  						</p>
  						<h5>
  						<a><strong>WinRAR 5.00 (32 bits)</strong></a>
  						</h5>
  						<p>
  							WinRAR, uno de los mejores compresores de archivos del mercado
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>2.041</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Limpieza y optimizaciÃ³n del sistema
  						</p>
  						<h5>
  						<a><strong>CCleaner 4.05.4250</strong></a>
  						</h5>
  						<p>
  							Limpia tu PC para que vaya mÃ¡s rÃ¡pido
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>3.823</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Antivirus
  						</p>
  						<h5>
  						<a><strong>avast! Free Antivirus 8.0.1497</strong></a>
  						</h5>
  						<p>
  							El antivirus gratuito mÃ¡s completo
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>19.593</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Navegadores web
  						</p>
  						<h5>
  						<a><strong>Google Chrome 29.0.1547.66</strong></a>
  						</h5>
  						<p>
  							El navegador mÃ¡s rÃ¡pido e inteligente
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>1.187</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Reproductores de vÃ­deo multiformato
  						</p>
  						<h5>
  						<a><strong>GOM Media Player GOM Media Player 2.2.53.5169</strong></a>
  						</h5>
  						<p>
  							Reproductor de vÃ­deo con gran calidad de imagen y sonido
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>685</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Navegadores web
  						</p>
  						<h5>
  						<a><strong>Opera 16.0.1196.62</strong></a>
  						</h5>
  						<p>
  							Rapidez y estabilidad para navegar por la red
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>2.475</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Control remoto del PC
  						</p>
  						<h5>
  						<a><strong>TeamViewer 8 8.0.20768</strong></a>
  						</h5>
  						<p>
  							Compartir el Escritorio nunca fue tan fÃ¡cil
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>273</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Reproductores de vÃ­deo
  						</p>
  						<h5>
  						<a><strong>VLC media player 2.0.8</strong></a>
  						</h5>
  						<p>
  							El mejor reproductor gratuito de vÃ­deo
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>1.525</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Clientes P2P
  						</p>
  						<h5>
  						<a><strong>Ares 2.2.5</strong></a>
  						</h5>
  						<p>
  							Descarga todo tipo de archivos con Ares
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>14.683</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Descargas YouTube
  						</p>
  						<h5>
  						<a><strong>aTube Catcher 3.8.4272</strong></a>
  						</h5>
  						<p>
  							Descarga vÃ­deos de YouTube... Â¡y mucho mÃ¡s!
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>2.062</dd>
  						</dl>
  					</div>
  					</li>
  					<li><a>MÃ¡s</a></li>
  				</ul>
  				<ul>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Extensiones Firefox
  						</p>
  						<h5>
  						<a><strong>YouTube Center 1.34.0 (Firefox)</strong></a>
  						</h5>
  						<p>
  							Restablece el antiguo sistema buffer de YouTube. Â¡Y no sÃ³lo eso!
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Optimizadores de navegaciÃ³n
  						</p>
  						<h5>
  						<a><strong>YouTube Center 1.34.0 (Safari)</strong></a>
  						</h5>
  						<p>
  							Restablece el antiguo sistema buffer de YouTube. Â¡Y no sÃ³lo eso!
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Mejoras Opera
  						</p>
  						<h5>
  						<a><strong>YouTube Center 1.34.0 (Opera)</strong></a>
  						</h5>
  						<p>
  							Restablece el antiguo sistema buffer de YouTube. Â¡Y no sÃ³lo eso!
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>VersiÃ³n completa</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Juegos de plataformas
  						</p>
  						<h5>
  						<a><strong>Rayman Legends 1.0</strong></a>
  						</h5>
  						<p>
  							La Ãºltima entrega de la legendaria serie de plataformas finalmente en PC
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span id='test'>10/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Juegos de guerra
  						</p>
  						<h5>
  						<a><strong>War Thunder 1.0.1.269 Beta</strong></a>
  						</h5>
  						<p>
  							Simulador de combate aÃ©reo multijugador y gratuito
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>1</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>InglÃ©s</dd>
  					</dl>
  					<div>
  						<p>
  							Otros juegos de estrategia
  						</p>
  						<h5>
  						<a><strong>Savage XR 1.0</strong></a>
  						</h5>
  						<p>
  							Un juego online gratuito mezcla de acciÃ³n y estrategia
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>7,0/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Extensiones Chrome
  						</p>
  						<h5>
  						<a><strong>YouTube Center 1.34.0 (Chrome)</strong></a>
  						</h5>
  						<p>
  							Restablece el antiguo sistema buffer de YouTube. Â¡Y no sÃ³lo eso!
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>InglÃ©s</dd>
  					</dl>
  					<div>
  						<p>
  							Utilidades redes sociales
  						</p>
  						<h5>
  						<a><strong>InstaPic para Windows 8 1.0</strong></a>
  						</h5>
  						<p>
  							Un cliente de Instagram para Windows 8
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Extensiones Chrome
  						</p>
  						<h5>
  						<a><strong>Google Input Tools 3.0.1.0</strong></a>
  						</h5>
  						<p>
  							Escribe en Google Chrome con caracteres no latinos
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>InglÃ©s</dd>
  					</dl>
  					<div>
  						<p>
  							GuÃ­as y planificaciÃ³n de viajes
  						</p>
  						<h5>
  						<a><strong>Foursquare para Windows 8 1.0</strong></a>
  						</h5>
  						<p>
  							La red social para descubrir tu ciudad
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>1</dd>
  						</dl>
  					</div>
  					</li>
  					<li><a>MÃ¡s</a></li>
  				</ul>
  				<ul>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Navegadores web
  						</p>
  						<h5>
  						<a><strong>Google Chrome 29.0.1547.66</strong></a>
  						</h5>
  						<p>
  							El navegador mÃ¡s rÃ¡pido e inteligente
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>1.187</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Notas y recordatorios
  						</p>
  						<h5>
  						<a><strong>Evernote 5.0.0.1137</strong></a>
  						</h5>
  						<p>
  							El bloc de notas definitivo: multimedia y online
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>29</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Extensiones Chrome
  						</p>
  						<h5>
  						<a><strong>Adblock Plus para Google Chrome 1.5.4</strong></a>
  						</h5>
  						<p>
  							AdiÃ³s a la publicidad en Google Chrome
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>4</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>InglÃ©s</dd>
  					</dl>
  					<div>
  						<p>
  							MÃ¡quinas virtuales
  						</p>
  						<h5>
  						<a><strong>VMware Player 6.0.0-1295980</strong></a>
  						</h5>
  						<p>
  							Ejecuta un PC virtual en tu Escritorio
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>9,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>56</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>De prueba</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Antivirus
  						</p>
  						<h5>
  						<a><strong>AVG AntiVirus 2014 2014.0.4116</strong></a>
  						</h5>
  						<p>
  							Defensa eficaz y rÃ¡pida contra virus, spyware y rootkits
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>229</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>De prueba</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Suites de seguridad
  						</p>
  						<h5>
  						<a><strong>AVG Internet Security 2014 2014.0.4116</strong></a>
  						</h5>
  						<p>
  							Todo en uno para mantener a salvo tu equipo
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>207</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Antivirus
  						</p>
  						<h5>
  						<a><strong>avast! Free Antivirus 8.0.1497</strong></a>
  						</h5>
  						<p>
  							El antivirus gratuito mÃ¡s completo
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>19.593</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Antivirus
  						</p>
  						<h5>
  						<a><strong>AVG AntiVirus Free 2014 2014.0.4116</strong></a>
  						</h5>
  						<p>
  							ProtecciÃ³n completa contra el malware
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>8,0/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>3.093</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>Gratis</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Control remoto del PC
  						</p>
  						<h5>
  						<a><strong>TeamViewer 8 8.0.20768</strong></a>
  						</h5>
  						<p>
  							Compartir el Escritorio nunca fue tan fÃ¡cil
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>273</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<dl>
  						<dt>Descargar</dt>
  						<dd>
  						<a></a>
  						<a></a>
  						</dd>
  						<dt>Licencia</dt>
  						<dd>De prueba</dd>
  						<dt>Idioma</dt>
  						<dd>EspaÃ±ol</dd>
  					</dl>
  					<div>
  						<p>
  							Compresores
  						</p>
  						<h5>
  						<a><strong>WinRAR 5.00 (32 bits)</strong></a>
  						</h5>
  						<p>
  							WinRAR, uno de los mejores compresores de archivos del mercado
  						</p>
  						<dl>
  							<dt>Puntuar</dt>
  							<dd><span>10/10</span></dd>
  							<dt>Opiniones </dt>
  							<dd>2.041</dd>
  						</dl>
  					</div>
  					</li>
  					<li><a>MÃ¡s</a></li>
  				</ul>
  			</div>
  			<div>
  				<div>
  					<h4>
  					<a>Vea su anuncio aquÃ­</a>
  					Softonic Ads </h4>
  					<div>
  						<ul>
  							<li>
  							<a>
  							<img alt="Descargar Ares-Pro 2013" src="http://imagenes.es.sftcdn.net/ads/icons/4788/55798.png" width="40" height="40">
  							</a>
  							<h5>
  							<a>Descargar Ares-Pro 2013</a>
  							</h5>
  							<p>
  								Ãšltima versiÃ³n. Descarga MÃºsica, Pelis, Juegos... a mÃ¡xima velocidad! GRATIS
  							</p>
  							<div>
  								<a><strong>Ver mÃ¡s</strong></a>
  							</div>
  							</li>
  							<li>
  							<a>
  							<img alt="Descargar ClamWin Antivirus" src="http://imagenes.es.sftcdn.net/ads/icons/4788/50bd9.png" width="40" height="40">
  							</a>
  							<h5>
  							<a>Descargar ClamWin Antivirus</a>
  							</h5>
  							<p>
  								Ãšltima versiÃ³n Oficial. El Antivirus NÂº1 del mercado. Licencia para siempre y GRATIS
  							</p>
  							<div>
  								<a><strong>Ver mÃ¡s</strong></a>
  							</div>
  							</li>
  							<li>
  							<a>
  							<img alt="DJ Mixer Studio" src="http://imagenes.es.sftcdn.net/ads/icons/1296/de77f.jpg" width="40" height="40">
  							</a>
  							<h5>
  							<a>DJ Mixer Studio</a>
  							</h5>
  							<p>
  								TÃº eres el DJ! Mezcla todas tus canciones gratis
  							</p>
  							<div>
  								<a><strong>Ver mÃ¡s</strong></a>
  							</div>
  							</li>
  							<li>
  							<a>
  							<img alt="Speed Ares" src="http://imagenes.es.sftcdn.net/ads/icons/1296/a3933.jpg" width="40" height="40">
  							</a>
  							<h5>
  							<a>Speed Ares</a>
  							</h5>
  							<p>
  								Descarga musica, videos y mas Gratis con Speedares
  							</p>
  							<div>
  								<a><strong>Ver mÃ¡s</strong></a>
  							</div>
  							</li>
  						</ul>
  					</div>
  				</div>
  			</div>
  		</div>
  		<div>
  			<div>
  				<span>Publicidad</span>
  				<div>
  					<div>
  						<iframe>
  						</iframe>
  					</div>
  				</div>
  			</div>
  			<div>
  				<div>
  					<h4>Top Downloads: <span>Windows</span></h4>
  					<input>
  					<input>
  					<input>
  					<div>
  						<ul>
  							<li>
  							<a>EspaÃ±a</a>
  							<div>
  								<span><a>Selecciona tu paÃ­s</a></span>
  								<ul>
  									<li><span>EspaÃ±a</span></li>
  									<li><span>MÃ©xico</span></li>
  									<li><span>Argentina</span></li>
  									<li><span>Colombia</span></li>
  									<li><span>Chile</span></li>
  									<li><span>Peru</span></li>
  									<li><span>Venezuela</span></li>
  									<li><span>Ecuador</span></li>
  									<li><span>Estados Unidos</span></li>
  									<li><span>RepÃºblica Dominicana</span></li>
  									<li><span>Guatemala</span></li>
  									<li><span>Costa Rica</span></li>
  									<li><span>Uruguay</span></li>
  								</ul>
  							</div>
  							</li>
  							<li>
  							<a> Global </a>
  							</li>
  						</ul>
  					</div>
  				</div>
  				<div class="">
  					<span>Softonic - Programas mÃ¡s descargados</span>
  					<span>1440</span>
  					<p>
  						Programas mÃ¡s descargados
  					</p>
  					<input>
  					<ol>
  						<li>
  						<a>Ares</a>
  						<p>
  							Descarga todo tipo de archivos con Ares
  						</p>
  						</li>
  						<li>
  						<a>uTorrent</a>
  						<i></i>
  						</li>
  						<li>
  						<a>avast! Free Antivirus</a>
  						</li>
  						<li>
  						<a>Google Chrome</a>
  						</li>
  						<li>
  						<a>Skype</a>
  						<i></i>
  						</li>
  						<li>
  						<a>aTube Catcher</a>
  						</li>
  						<li>
  						<a>VLC media player</a>
  						</li>
  						<li>
  						<a>CCleaner</a>
  						</li>
  						<li>
  						<a>WinRAR</a>
  						</li>
  						<li>
  						<a>AVG AntiVirus Free 2013</a>
  						</li>
  						<li>
  						<a>Advanced SystemCare</a>
  						</li>
  						<li>
  						<a>Minecraft</a>
  						</li>
  						<li>
  						<a>jDownloader</a>
  						<i></i>
  						</li>
  						<li>
  						<a>Daemon Tools</a>
  						</li>
  						<li>
  						<a>PhotoScape</a>
  						</li>
  						<li>
  						<a>Firefox</a>
  						</li>
  						<li>
  						<a>Adobe Flash Player</a>
  						</li>
  						<li>
  						<a>Descargar Musica Gratis</a>
  						</li>
  						<li>
  						<a>Microsoft Office 2010</a>
  						</li>
  						<li>
  						<a>eMule</a>
  						</li>
  					</ol>
  					<div>
  						<a>Mejor Valorados </a>
  						| <a>Top Ventas </a>
  					</div>
  				</div>
  				<div>
  					<span>Softonic - Programas mÃ¡s descargados</span>
  					<span>1440</span>
  					<p>
  						Programas mÃ¡s descargados
  					</p>
  					<input>
  					<ol>
  						<li>
  						<a>Ares</a>
  						<p>
  							Descarga todo tipo de archivos con Ares
  						</p>
  						</li>
  						<li>
  						<a>aTube Catcher</a>
  						</li>
  						<li>
  						<a>Google Chrome</a>
  						</li>
  						<li>
  						<a>avast! Free Antivirus</a>
  						</li>
  						<li>
  						<a>Skype</a>
  						</li>
  						<li>
  						<a>Descargar Musica Gratis</a>
  						</li>
  						<li>
  						<a>uTorrent</a>
  						</li>
  						<li>
  						<a>Minecraft</a>
  						<i></i>
  						</li>
  						<li>
  						<a>PhotoScape</a>
  						</li>
  						<li>
  						<a>WinRAR</a>
  						</li>
  						<li>
  						<a>CCleaner</a>
  						</li>
  						<li>
  						<a>Microsoft Office 2010</a>
  						</li>
  						<li>
  						<a>Virtual DJ</a>
  						<i></i>
  						</li>
  						<li>
  						<a>Firefox</a>
  						</li>
  						<li>
  						<a>Windows Movie Maker</a>
  						<i></i>
  						</li>
  						<li>
  						<a>Plants VS Zombies</a>
  						</li>
  						<li>
  						<a>VLC media player</a>
  						</li>
  						<li>
  						<a>LINE</a>
  						</li>
  						<li>
  						<a>Grand Theft Auto: San Andreas...</a>
  						<i></i>
  						</li>
  						<li>
  						<a>AVG AntiVirus Free 2013</a>
  						</li>
  					</ol>
  					<div>
  						<a></a>
  					</div>
  				</div>
  			</div>
  			<div>
  				<h4>Ãšltimos <em>vÃ­deos</em></h4>
  				<ul>
  					<li>
  					<a>Tutorial 1 - Control del balÃ³n ...</a>
  					<div>
  						<a></a>
  						<a>
  						<em>VER</em>
  						</a>
  						<dl>
  							<dt>DuraciÃ³n</dt>
  							<dd>00:02:02</dd>
  						</dl>
  					</div>
  					</li>
  					<li>
  					<a>FIFA 14 TrÃ¡iler del modo carrer...</a>
  					<span>00:01:08</span>
  					</li>
  					<li>
  					<a>Jugamos y analizamos Final Fant...</a>
  					<span>00:03:38</span>
  					</li>
  					<li>
  					<a>Grand Theft Auto V, nuevo trÃ¡il...</a>
  					<span>00:01:00</span>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
  	<div>
  		<span>Publicidad</span>
  		<div>
  			<iframe>
  			</iframe>
  		</div>
  	</div>
  </div>
tests:
  -
    name: TreeWalker
    code: |
      var nodeList = [];
      var el = document.getElementById('test')
      
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT, function(node){
          return node.id == 'root' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }, false);
      
      
      while(walker.parentNode()){
          nodeList.push(walker.currentNode);
      }
      
      console.log(nodeList)
  -
    name: parentNode
    code: |
      var nodeList = [];
      var el = document.getElementById('test')
      
      while (el) {
          if(el.id == "root"){
                nodeList.push(el);
          }
          el = el.parentElement;
       }
      
      console.log(nodeList)
---
What is faster for climbing a DOM hierarchy to identify certain elements
