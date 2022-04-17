import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { GrupoDestaquesComponent } from './grupo-destaques/grupo-destaques.component';
import { SobreComponent } from './sobre/sobre.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { GrupoComponent } from './grupo/grupo.component';
import { GrupoEditarComponent } from './editar/grupo-editar/grupo-editar.component';
import { GrupoDeletarComponent } from './deletar/grupo-deletar/grupo-deletar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { GrupoPaginaComponent } from './grupo-pagina/grupo-pagina.component';
import { AlertasComponent } from './alertas/alertas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndexComponent } from './index/index.component'



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    GrupoDestaquesComponent,
    CadastrarComponent,
    InicioComponent,
    GrupoComponent,
    GrupoEditarComponent,
    GrupoDeletarComponent,
    UsuarioComponent,
    GrupoPaginaComponent,
    AlertasComponent,
    SobreComponent,
    IndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
