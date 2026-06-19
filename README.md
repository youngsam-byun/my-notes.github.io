<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/> </parent>

    <groupId>com.company.project</groupId>
    <artifactId>parent-architecture</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <properties>
        <java.version>17</java.version>
        <kotlin.version>1.9.24</kotlin.version>
        
        <mockk.version>1.13.12</mockk.version>
        <detekt.version>1.23.6</detekt.version>
        
        <maven-antrun.version>3.1.0</maven-antrun.version>
    </properties>

    <modules>
        <module>application-api</module>
    </modules>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.mockk</groupId>
                <artifactId>mockk-jvm</artifactId>
                <version>${mockk.version}</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.jetbrains.kotlin</groupId>
                    <artifactId>kotlin-maven-plugin</artifactId>
                    <version>${kotlin.version}</version>
                    <executions>
                        <execution>
                            <id>compile</id>
                            <phase>compile</phase>
                            <goals><goal>compile</goal></goals>
                        </execution>
                        <execution>
                            <id>test-compile</id>
                            <phase>test-compile</phase>
                            <goals><goal>test-compile</goal></goals>
                        </execution>
                    </executions>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-surefire-plugin</artifactId>
                    <configuration>
                        <includes>
                            <include>**/*Test.java</include>
                            <include>**/*Test.kt</include>
                        </includes>
                    </configuration>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-failsafe-plugin</artifactId>
                    <executions>
                        <execution>
                            <goals>
                                <goal>integration-test</goal>
                                <goal>verify</goal>
                            </goals>
                        </execution>
                    </executions>
                    <configuration>
                        <includes>
                            <include>**/*IT.java</include>
                            <include>**/*IT.kt</include>
                        </includes>
                    </configuration>
                </plugin>

                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-antrun-plugin</artifactId>
                    <version>${maven-antrun.version}</version>
                    <executions>
                        <execution>
                            <id>detekt</id>
                            <phase>verify</phase>
                            <goals><goal>run</goal></goals>
                            <configuration>
                                <target>
                                    <java classname="io.gitlab.arturbosch.detekt.cli.Main" failonerror="true" fork="true">
                                        <classpath refid="maven.plugin.classpath"/>
                                        <arg value="--input"/>
                                        <arg value="${project.basedir}/src/main/kotlin"/>
                                        <arg value="--report"/>
                                        <arg value="xml:${project.build.directory}/detekt.xml"/>
                                    </java>
                                </target>
                            </configuration>
                        </execution>
                    </executions>
                    <dependencies>
                        <dependency>
                            <groupId>io.gitlab.arturbosch.detekt</groupId>
                            <artifactId>detekt-cli</artifactId>
                            <version>${detekt.version}</version>
                        </dependency>
                    </dependencies>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
</project>
