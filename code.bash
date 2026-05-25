# 1. Inicializa o Git na sua pasta local (caso ainda não tenha feito)
git init

# 2. Adiciona todos os seus arquivos ao "computador de bordo" do Git
git add .

# 3. Faz o seu primeiro salvamento oficial com uma mensagem
git commit -m "first commit - Estrutura inicial da barbearia"

# 4. Cria o ramo principal chamado 'main'
git branch -M main

# 5. Conecta a sua pasta local ao link do seu GitHub (Substitua o link abaixo pelo link do SEU repositório)
git remote add origin https://github.com/SEU-USUARIO/barbearia-class.git

# 6. Envia os arquivos de fato para a internet
git push -u origin main