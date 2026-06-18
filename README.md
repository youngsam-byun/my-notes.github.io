Act as an expert enterprise Java/Kotlin architect. Create a complete Maven multi-module project structure based on the following specifications. Provide the root `pom.xml` and the individual `pom.xml` files for each module, ensuring all correct Kotlin 2.1.0 configurations and dependencies are met.

### Project Specification
- **Project Root Directory:** `kafka-cloud-poc`
- **Language & Version:** Kotlin 2.1.0
- **Build System:** Maven
- **Common Test Stack (All Modules):** JUnit 5, MockK, and Maven Surefire Plugin configured for Kotlin.

### Module Hierarchy & Details:

1. **Root Module (`kafka-cloud-poc`)**
   - Packaging: `pom`
   - Should manage global versions (Kotlin 2.1.0, Spring Boot, MockK, Avro) in `<properties>` or `<dependencyManagement>`.
   - Modules list: `app`, `v1`, `v2`.

2. **`v1` Module (Kafka Producer/Consumer - Old Schema)**
   - Purpose: Library/Module using current Avro schema for Kafka production and consumption.
   - Dependencies: Kotlin stdlib, Apache Kafka / Spring Kafka, Avro compiler/dependencies.
   - Testing: JUnit 5, MockK, Maven Surefire.

3. **`v2` Module (Kafka Producer/Consumer - New Schema)**
   - Purpose: Library/Module using the new/upgraded Avro schema.
   - Dependencies: Same stack as `v1` but isolated for the new schema POC.
   - Testing: JUnit 5, MockK, Maven Surefire.

4. **`app` Module (Spring Boot Application)**
   - Purpose: Main executable Spring Boot application acting as the POC orchestrator.
   - Dependencies: Must depend on both `v1` and `v2` modules. Includes Spring Boot Starter Web/Kafka.
   - Build: Include `spring-boot-maven-plugin`.
   - Testing: JUnit 5, MockK, `spring-boot-starter-test`, Maven Surefire.

### Output Requirements:
1. Provide the exact directory tree layout.
2. Provide the full code for:
   - `kafka-cloud-poc/pom.xml`
   - `kafka-cloud-poc/v1/pom.xml`
   - `kafka-cloud-poc/v2/pom.xml`
   - `kafka-cloud-poc/app/pom.xml`
3. Ensure the `kotlin-maven-plugin` is configured properly for Kotlin 2.1.0 in all modules (or inherited from root) with `<jvmTarget>17</jvmTarget>` (or 21) and the correct test-compile execution phases.
