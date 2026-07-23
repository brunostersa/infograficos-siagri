# Processos & Funcionalidades – Guia de Embed

Este componente permite visualizar processos e funcionalidades de cada solução Siagri de forma interativa. Você pode embutir em qualquer site usando iframe.

## 📋 URLs Diretas

### Agribusiness
```
https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=agribusiness
```

### Agrimanager
```
https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=agrimanager
```

### Essencial
```
https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=essencial
```

### Web
```
https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=web
```

## 🔗 Parâmetros de URL

| Parâmetro | Valores | Descrição | Exemplo |
|-----------|---------|-----------|---------|
| `sol` | agribusiness, agrimanager, essencial, web | Define qual solução é exibida | `?sol=essencial` |
| `nav` | 0 | Esconde a navegação/seletor | `?nav=0` |

**Combinação de parâmetros:**
```
?sol=web&nav=0
```

## 💻 Como Usar em um Site

### Embed Básico
```html
<iframe
  src="https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=agribusiness"
  width="100%"
  height="600"
  frameborder="0"
  allow="fullscreen"
  style="border-radius: 8px; border: 1px solid #e0e0e0;">
</iframe>
```

### Sem Navegação
```html
<iframe
  src="https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/?sol=agribusiness&nav=0"
  width="100%"
  height="600"
  frameborder="0"
  allow="fullscreen"
  style="border-radius: 8px; border: 1px solid #e0e0e0;">
</iframe>
```

## 📱 Responsividade

Use `width="100%"` para ocupar toda a largura do container. Para ajustar altura em dispositivos móveis:

```javascript
const iframe = document.querySelector('iframe[src*="processos-funcionalidades"]');
if (window.innerWidth < 768) {
  iframe.height = '800'; // Altura aumentada para mobile
}
```

## 🎯 Casos de Uso

1. **Página de Soluções:** Mostrar Agribusiness como padrão
   ```
   ?sol=agribusiness
   ```

2. **Comparativa:** Sem nav, usuário navega livremente
   ```
   ?nav=0
   ```

3. **Landing Essencial:** Pré-selecionar versão específica
   ```
   ?sol=essencial&nav=0
   ```

## 📖 Exemplo Completo

Para ver um guia interativo com preview, acesse:
```
https://brunostersa.github.io/infograficos-siagri/processos-funcionalidades/embed-example.html
```

## ✨ Recursos

- ✅ Componente totalmente responsivo
- ✅ Suporta pré-seleção de solução via URL
- ✅ Opção de esconder navegação para embed puro
- ✅ Compatível com todos os navegadores modernos
- ✅ Performance otimizada
