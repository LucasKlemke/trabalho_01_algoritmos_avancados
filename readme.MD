# IA para Desenvolvimento + Revisão de Estruturas de Dados I

**Desafios de Code Interview**

---

## 👥 Equipe

| Aluno           |
|-----------------|
| Lucas Klemke    |
| Kalebe Fukuda   |
| João            |

---

## 🛠️ Configuração do Projeto

| Item                      | Escolha                                                      |
|---------------------------|--------------------------------------------------------------|
| **Linguagem**             | JavaScript                                                   |
| **Ferramenta de IA**      | Google Gemini                                                |
| **Como foi utilizada**    | Resolução de dúvidas e melhor entendimento do problema       |
| **Por que foi escolhida** | Familiaridade com a ferramenta                               |

### Uso da IA pela equipe

- Explicar complexidade

---

## 📋 Visão Geral dos Desafios

| Estrutura    | Quantidade |
|-------------|------------|
| Arrays      | 5          |
| LinkedList  | 4          |
| Pilhas      | 3          |

**Total:** 12 desafios · 3 pessoas

---

## 📊 Distribuição por Aluno

| Aluno          | Arrays | LinkedList | Pilhas |
|----------------|--------|------------|--------|
| Lucas Klemke   | 2      | 1          | 1      |
| Kalebe Fukuda  | 2      | 1          | 1      |
| João           | 1      | 2          | 1      |

---

## 📁 Desafios Detalhados

### Array (5)

#### 1. Find First and Last Position of Element in Sorted Array  
[LeetCode · Médio · Lucas Klemke](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/)

> Dado um array de inteiros `nums` ordenado em ordem não decrescente, encontre a posição inicial e final de um valor alvo (`target`). Caso o valor alvo não seja encontrado no array, retorne `[-1, -1]`.
>
> O algoritmo deve ter complexidade de tempo O(log n).  
>
> **Exemplo 1:**  
> Entrada: nums = [5,7,7,8,8,10], target = 8  
> Saída: [3,4]  
>
> **Exemplo 2:**  
> Entrada: nums = [5,7,7,8,8,10], target = 6  
> Saída: [-1,-1]  
>
> **Exemplo 3:**  
> Entrada: nums = [], target = 0  
> Saída: [-1,-1]  
>
> **Restrições:**  
> - 0 <= nums.length <= 10⁵  
> - -10⁹ <= nums[i] <= 10⁹  
> - nums é um array não decrescente  
> - -10⁹ <= target <= 10⁹

---

#### 2. Beautiful Array  
[LeetCode · Médio · Lucas Klemke](https://leetcode.com/problems/beautiful-array/description/)

> Dado um inteiro `n`, retorne qualquer permutação dos números de `1` a `n` tal que, para todo par de índices `i < j`, não exista um índice `k` entre eles para o qual `2 * nums[k] == nums[i] + nums[j]`.
>
> **Restrições:**  
> - 1 <= n <= 1000

---

#### 3. Array Prototype Last
[LeetCode · Fácil · Kalebe Fukuda](https://leetcode.com/problems/array-prototype-last/)

> Escreva um código que aprimore todos os arrays para que o método `array.last()` possa ser chamado em qualquer array e retorne o último elemento. Se não houver elementos no array, deve retornar `-1`.
>
> **Exemplo 1:**  
> Entrada: nums = [null, {}, 3]  
> Saída: 3  
>
> **Exemplo 2:**  
> Entrada: nums = []  
> Saída: -1  
>
> **Restrições:**  
> - arr é um array JSON válido  
> - 0 <= arr.length <= 1000

---

#### 4. Removing Minimum and Maximum From Array
[LeetCode · Médio · Kalebe Fukuda](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/description/)

> Dado um array de inteiros distintos `nums`, remova o elemento de menor e o de maior valor. Uma deleção é definida como remover um elemento do início ou do fim do array. Retorne o número mínimo de deleções necessárias para remover ambos.
>
> **Exemplo 1:**  
> Entrada: nums = [2,10,7,5,4,1,8,6]  
> Saída: 5  
>
> **Exemplo 2:**  
> Entrada: nums = [0,-4,19,1,8,-2,-3,5]  
> Saída: 3  
>
> **Exemplo 3:**  
> Entrada: nums = [101]  
> Saída: 1  
>
> **Restrições:**  
> - 1 <= nums.length <= 10⁵  
> - -10⁵ <= nums[i] <= 10⁵  
> - Os inteiros em nums são distintos

---

#### 5. Product of Array Except Self  
[LeetCode · Médio · João](https://leetcode.com/problems/product-of-array-except-self/)

> Dado um array de inteiros `nums`, retorne um array `answer` onde `answer[i]` é o produto de todos os elementos de `nums` exceto `nums[i]`, sem usar divisão e em tempo O(n).

---

### Lista Encadeada (4)

#### 1. Reverse Linked List  
[LeetCode · Fácil · Lucas Klemke](https://leetcode.com/problems/reverse-linked-list/)

> Dado o head de uma lista ligada simples, inverta a lista e retorne o novo head resultante.

---

#### 2. Middle of the Linked List  
[LeetCode · Fácil · João](https://leetcode.com/problems/middle-of-the-linked-list/)

> Dado o head de uma lista ligada simples, retorne o nó do meio. Se houver dois nós centrais, retorne o segundo.

---

#### 3. Remove Nth Node From End of List  
[LeetCode · Médio · João](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

> Dado o head de uma lista ligada e um inteiro `n`, remova o n-ésimo nó a partir do fim da lista e retorne o novo head.

---

#### 4. Remove Linked List Elements
[LeetCode · Fácil · Kalebe Fukuda](https://leetcode.com/problems/remove-linked-list-elements/description/)

> Dado o head de uma lista ligada e um inteiro `val`, remova todos os nós cujo valor seja igual a `val` e retorne o novo head.
>
> **Exemplo 1:**  
> Entrada: head = [1,2,6,3,4,5,6], val = 6  
> Saída: [1,2,3,4,5]  
>
> **Exemplo 2:**  
> Entrada: head = [], val = 1  
> Saída: []  
>
> **Exemplo 3:**  
> Entrada: head = [7,7,7,7], val = 7  
> Saída: []  
>
> **Restrições:**  
> - O número de nós está no intervalo [0, 10⁴]  
> - 1 <= Node.val <= 50  
> - 0 <= val <= 50

---

### Pilha (3)

#### 1. Implement Stack using Queues  
*LeetCode · Fácil · Lucas Klemke*

> *Descrição em breve.*

---

#### 2. Valid Parentheses  
[LeetCode · Fácil · João](https://leetcode.com/problems/valid-parentheses/)

> Dada uma string contendo os caracteres `()[]{}`, verifique se os parênteses/chaves/colchetes estão corretamente fechados e na ordem certa.

---

#### 3. Climbing Stairs
[LeetCode · Fácil · Kalebe Fukuda](https://leetcode.com/problems/climbing-stairs/description/)

> Você está subindo uma escada. São necessários `n` passos para chegar ao topo.
> A cada vez você pode subir `1` ou `2` degraus. De quantas formas distintas você consegue chegar ao topo?
>
> **Exemplo 1:**  
> Entrada: n = 2  
> Saída: 2  
> Explicação: Há duas formas de subir ao topo.  
> 1. 1 degrau + 1 degrau  
> 2. 2 degraus  
>
> **Exemplo 2:**  
> Entrada: n = 3  
> Saída: 3  
> Explicação: Há três formas de subir ao topo.  
> 1. 1 degrau + 1 degrau + 1 degrau  
> 2. 1 degrau + 2 degraus  
> 3. 2 degraus + 1 degrau  
>
> **Restrições:**  
> - 1 <= n <= 45

---
