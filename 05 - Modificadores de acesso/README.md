# Modificadores de Acesso

## Private
É o modificador de acesso mais restritivo de todos. Qualquer atributo e/ou método declarado como *private* são acessíveis somente pela classe que os declara.  
Métodos e atributos com o modificador private não podem ser herdados.

&nbsp;&nbsp;&nbsp;

## Protected
É um modificador de acesso um pouco mais permissivo que o *private*. Atributos e métodos declarados como *protected* são acessíveis pela classe que os declara, suas subclasses.    
Métodos e atributos declarados com o modificador protected numa superclasse devem ser definidos como *protected* ou *public* em suas subclasses e nunca *private*.

&nbsp;&nbsp;&nbsp;

## Public
Modificador de acesso mais permissivo de todos os modificadores, alem de ser o modificador de vem por *default*. Atributos, métodos e classes declarados como public são acessíveis por qualquer classe do projeto.
Todos os métodos e atributos declarados como *public* são herdados pelas subclasses.
Métodos e atributos declarados como public devem se manter *public* em todas as subclasses.