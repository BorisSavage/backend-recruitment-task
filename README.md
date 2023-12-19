# Zadanie Rekrutacyjne - Junior Node.js Developer

Ten projekt wykorzystuje narzędzie [Turborepo](https://turbo.build/) do optymalizacji procesu pracy przy tworzeniu aplikacji typu CRUD. Zawiera aplikację backendową z API zrealizowaną we frameworku NestJS, a środowisko deweloperskie jest skonteneryzowane przy użyciu Dockera.

## Wymagania wstępne

Zanim rozpoczniesz, upewnij się, że masz zainstalowane następujące narzędzia:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (classic)
- [Docker](https://www.docker.com/)

## Rozpoczęcie pracy


1. **Zainstaluj zależności:**

   ```bash
   yarn install
   
2. **Zbuduj obrazy Dockera:**

   ```bash
   docker-compose -f docker-compose.yml build
   
3. **Uruchom kontenery Dockera:**

   ```bash
   docker-compose -f docker-compose.yml up -d

## Skrypty


- **Tryb deweloperski:**

   ```bash
   yarn dev

- **Buduj projekt:**

   ```bash
   yarn build
   
- **Uruchom w trybie produkcji:**

   ```bash
   yarn start:prod
   
## Usługi Docker Compose

- **backend:**

   Ta usługa buduje i uruchamia główną aplikację w trybie produkcyjnym, udostępniając ją pod adresem 8000.
   
- **backend-test:**

   Ta usługa uruchamia testy dla głównej aplikacji w osobnym kontenerze.
   
- **database:**

   Ta usługa konfiguruje bazę danych PostgreSQL dla aplikacji.
   
## Zmienne środowiskowe

- **NODE_ENV:**

    - **production** : środowisko produkcyjne
    - **test** : środowisko testowe
   
- **DATABASE_HOST:**

   Nazwa hosta dla bazy danych PostgreSQL.
   
- **POSTGRES_DB:**

   Nazwa bazy danych PostgreSQL.
   
- **POSTGRES_USER:**

   Nazwa użytkownika dla bazy danych PostgreSQL.
   
- **POSTGRES_PASSWORD:**

   Hasło dla bazy danych PostgreSQL.
   
## Dodatkowe informacje

Aby aplikacja działała poprawnie poza środowiskiem Dockera, należy skonfigurować lokalną bazę danych PostgreSQL, zdefiniować zmienne środowiskowe tworząc nowy plik `.env` z odpowiednimi kluczami w katalogu `apps/api` oraz przeprowadzić migrację bazy.
   
Aby uzyskać więcej informacji na temat Turborepo, zajrzyj do [oficjalnej dokumentacji](https://turbo.build/repo/docs).

Dostosuj konfiguracje według własnych potrzeb. Happy coding! 🚀
